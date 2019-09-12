import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(5, "Digite mais que 5 caractéres!")
      .max(15, "Digite menos que 15 caractéres!")
      .required("Campo Obrigatório!"),
    password: Yup.string()
      .min(5, "Senha muito curta! Mínimo 5 dígitos!")
      .max(15, "Senha muito longa! Máximo 15 dígitos!")
      .required("Campo Obrigatório!"),
    email: Yup.string()
      .email("Endereço de Email Inválido!")
      .required("Campo Obrigatório!")
  });

  export default SignupSchema;