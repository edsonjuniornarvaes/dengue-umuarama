/* ANCHOR: 🎨 Style imports. */
import { toast } from "react-toastify";

export async function SupervisorCreate(url, values) {
  console.log(values);
  toast.success("Supervisor cadastrado com sucesso!");
}

/* NOTE: Request with axios and interceptors */

/* ANCHOR: 📨 Query imports. */
// import { api } from "../../../../../../services/interceptors";

// console.log("url:", url);
// for (var pair of values.entries()) {
//   console.log(pair[0] + ", " + pair[1]);
// }
// return await api
//   .post(url, values)
//   .then((res) => {
//     toast.success("Supervisor cadastrado com sucesso!");
//     return res.data;
//   })
//   .catch((error) => {
//     toast.error(error.message);
//     throw new Error(error);
//   });
