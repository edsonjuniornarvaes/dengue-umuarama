/* ANCHOR: 📨 Query imports. */
import { api } from "../../../../../../services/interceptors";

/* ANCHOR: 🎨 Style imports. */
import { toast } from "react-toastify";

export async function ReportCreate(url, values) {
  console.log("url:", url);
  for (var pair of values.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  return await api
    .post(url, values)
    .then((res) => {
      toast.success("Denúncia feita com sucesso!");
      return res.data;
    })
    .catch((error) => {
      toast.error(error.message);
      throw new Error(error);
    });
}