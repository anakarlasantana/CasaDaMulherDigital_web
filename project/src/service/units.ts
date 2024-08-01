
import api from "./api";
import { UnitProps } from "../interfaces/units";

export const units = {
  all: (filter: string = '') =>
    api.get<UnitProps[]>(`/api/units/?search=${filter}`).then((res) => res.data),
  
};
