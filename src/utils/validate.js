export const checkValidData = (email, password) => {
  //eslint-disable-next-line
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailValidate) return "Email Id is not valid";

  if (!passwordValidate) return "Password format is not valid";

  return null;
};
