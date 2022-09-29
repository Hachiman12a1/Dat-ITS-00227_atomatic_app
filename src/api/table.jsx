import service from "./instance";

export const getData = (page, namePage) => {
  const url = `/api/${namePage}?page=${page}`;
  return service.get(url);
};
