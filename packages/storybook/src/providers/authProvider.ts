export const authProvider = {
  login: (params) => {
    localStorage.setItem("token", "demo");
    return Promise.resolve();
  },
  checkError: (error) => {
    return Promise.resolve();
  },
  checkAuth: (params) => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  getIdentity: () => {
    return Promise.resolve({
      id: "0",
      avatar: "",
      fullName: "John Doe",
    });
  },
  getPermissions: (params) => {
    return Promise.resolve();
  },
};
