import axios from "axios";

export function create(info) {
  axios
    .post("/comment", info)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
