
import api from "./api";
import ServicesProps from "../interfaces/services";

export const services = {
  all: (filter: string = '') =>
    api.get<ServicesProps[]>(`/api/services/?search=${filter}`).then((res) => res.data),
  
};
