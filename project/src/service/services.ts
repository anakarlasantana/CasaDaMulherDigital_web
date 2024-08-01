
import api from "./api";
import ServicesProps from "../interfaces/services";

export const services = {
  all: () =>
    api.get<ServicesProps[]>(`/api/services/`).then((res) => res.data),
  
};
