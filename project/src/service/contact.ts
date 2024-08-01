
import api from "./api";
import FormDataProps from "../interfaces/formatData";

export const contact = {
  create: (payload: FormDataProps) =>
    api.post<FormDataProps[]>(`api/contacts/`,payload).then((res) => res.data),
  
};
