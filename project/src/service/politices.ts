
import PolicyProps from "../interfaces/politices";
import api from "./api";

export const politices = {
  all: (filter: string = '') =>
    api.get<PolicyProps[]>(`/api/politices/?search=${filter}`).then((res) => res.data),
  
};
