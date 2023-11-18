export const isLogged = () => !!localStorage.getItem("token");

export const saveToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const removeToke = () => localStorage.removeItem("token");

