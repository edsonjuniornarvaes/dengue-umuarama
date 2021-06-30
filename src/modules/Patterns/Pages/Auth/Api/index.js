/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

export async function SigIn(url, values) {
  console.log(values);

  if (
    values.email &&
    values.email !== "admin@gmail.com" &&
    values.email !== "supervisor@gmail.com"
  ) {
    return "error";
  }
  if (values.password.length >= 4 && values.password !== "123password") {
    return "error";
  }

  const email = values.email;

  const authParams = {
    authorized: true,
    email,
    profile:
      email === "admin@gmail.com"
        ? "admin"
        : email === "supervisor@gmail.com"
        ? "supervisor"
        : "user",
  };

  Cookies.set("auth", JSON.stringify(authParams));

  return "success";
}

/* NOTE: Request with axios and interceptors */

/* ANCHOR: 📨 Query imports. */
// import { api } from "../../../../../../services/interceptors";

// /* ANCHOR: 🎨 Style imports. */
// import { toast } from "react-toastify";

// return await api
//   .post(url, values)
//   .then((res) => {
//     toast.success("Denúncia feita com sucesso!");
//     return res.data;
//   })
//   .catch((error) => {
//     toast.error(error.message);
//     throw new Error(error);
//   });
