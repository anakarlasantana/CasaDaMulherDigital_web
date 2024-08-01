
import PolicyProps from "../interfaces/politices";
import api from "./api";

export const politices = {
  all: () =>
    api.get<PolicyProps[]>(`/api/politices/`).then((res) => res.data),
  
};
