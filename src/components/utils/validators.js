import { isEmpty } from "./validators-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овгоо оруулна уу";
  }
  if (isEmpty(formValues.userName)) {
    errors.lastName = "Хэрэглэгчийн нэрээ оруулна уу";
  }
  if (isEmpty(formValues.fristName)) {
    errors.lastName = "Нэрээ оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};
