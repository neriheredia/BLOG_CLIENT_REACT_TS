export const registerAdapter = (formData: any) => ({
  firstName: formData.firstName,
  lastName: formData.surname,
  email: formData.email,
  password: formData.password,
});
