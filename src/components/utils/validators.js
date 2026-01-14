
import { isEmpty,isEmail,isPhoneNumber } from "./validators-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овгоо оруулна уу";
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
  }
  if (isEmpty(formValues.fristName)) {
    errors.fristName = "Нэрээ оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  // email
  if (isEmpty(formValues.email)) {
    errors.email = "Имэйл хаягаа оруулна уу";
  } else if (!isEmail(formValues.email)) {
    errors.email = "Имэйл хаяг буруу байна";
  }

  // phone number
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Утасны дугаараа оруулна уу";
  } else if (!isPhoneNumber(formValues.phoneNumber)) {
    errors.phoneNumber =
      "Утасны дугаар буруу байна (+976XXXXXXXX)";
  }

  // password
  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үгээ оруулна уу";
  } else if (formValues.password.length < 8) {
    errors.password =
      "Нууц үг дор хаяж 8 тэмдэгтэй байх ёстой";
  } else if (
    !/[A-Za-z]/.test(formValues.password) ||
    !/[0-9]/.test(formValues.password)
  ) {
    errors.password =
      "Нууц үг үсэг болон тоо агуулсан байх ёстой";
  }

  // confirm password
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword =
      "Нууц үгээ давтан оруулна уу";
  } else if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword =
      "Нууц үг таарахгүй байна";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};



export const validateStepThree = (formValues) => {
  const errors = {};

  // 🎂 Birthday шалгах
  if (!formValues.birthDay) {
    errors.birthDay = "Төрсөн огноо оруулна уу";
  } else {
    const birthDate = new Date(formValues.birthDay);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      errors.birthDay = "Та 18 нас хүрсэн байх шаардлагатай";
    }
  }
  if (!formValues.profile) {
    errors.profile = "Профайл зураг оруулна уу";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

