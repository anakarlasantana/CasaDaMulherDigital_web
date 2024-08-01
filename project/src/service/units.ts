
import api from "./api";
import { UnitProps } from "../interfaces/units";

export const units = {
  all: () =>
    api.get<UnitProps[]>(`/api/units/`).then((res) => res.data),
  
};
