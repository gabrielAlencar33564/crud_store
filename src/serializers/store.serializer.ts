import * as yup from "yup";

export const createProductSerializer = yup.object().shape({
  name: yup.string().required("Name is required"),
  category: yup.string().required("Category is required"),
  quantity: yup
    .number()
    .min(1, "there must be at least one product")
    .required("Quantity is required"),
});
