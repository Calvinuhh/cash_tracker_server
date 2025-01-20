import { Router, Request, Response } from "express";

const testRouter: Router = Router();

testRouter.get("/", (req: Request, res: Response) => {
  res.json("Hello, World!");
});

export default testRouter;
