import * as yup from "yup";

export const createProductSerializer = yup.object().shape({
  name: yup.string().required("Name is required"),
  category: yup.string().required("Category is required"),
  quantity: yup.number().required("Quantity is required"),
});
