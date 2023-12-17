const Validate = (email, password, ConfirmPassword) => {
  const isConfirmPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(ConfirmPassword);
  const isEmailvalid = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValidate =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!isEmailvalid) return "email ID is not Valid";
  if (!isPasswordValidate === !isConfirmPasswordValid)
    return "Password is not Valid";

  return null;
};

export default Validate;
