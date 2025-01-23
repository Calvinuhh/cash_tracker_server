export const validateLengthFromTo = (
  value: string,
  num1: number,
  num2: number,
  input: string
) => {
  if (value.length < num1 || value.length > num2) {
    throw Error(`${input} debe tener entre ${num1} y ${num2} caracteres`);
  }
};

export const validateAmount = (amount: number) => {
  if (isNaN(Number(amount))) {
    throw Error("El campo amount debe ser un numero");
  }
};

export const validateAmountRange = (amount: number) => {
  if (amount < 0) {
    throw Error("El campo amount debe ser un numero positivo");
  }
};
