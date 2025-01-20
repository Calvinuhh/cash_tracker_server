import server from "./app";
import database from "./database/database";

process.loadEnvFile();
const { PORT } = process.env;

database
  .sync({ force: false })
  .then(() => {
    console.log("Base de datos sincronizada");
    server.listen(PORT, () => {
      console.log(
        `Servidor escuchando en el puerto: ${PORT}, version de node: 22.13`
      );
    });
  })
  .catch((error) => {
    throw Error(`Error al sincronizar la base de datos: ${error}`);
  });
