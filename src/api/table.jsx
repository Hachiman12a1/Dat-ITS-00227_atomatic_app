import service from "./instance";

export const getuser = (page) => {
  const url = `/api/users?page=${page}`;
  return service.get(url);
};

export const getresource = (page) => {
  const url = `/api/unknown?page =${page}`;
  return service.get(url);
}