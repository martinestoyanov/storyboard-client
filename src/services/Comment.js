import axios from "axios";
import * as CONSTS from "../utils/consts";

const commentService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/comment`,
});

function internalServerError(err) {
  console.log("err:", err.response.data);
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}
function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

export default function createComment(info) {
  return commentService
    .post("/create", info, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then((res) => {
      console.log(res);
      successStatus();
    })
    .catch((err) => internalServerError(err));
}

export function getComment(id) {
  return commentService
    .get(`/${id}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function updateComment(id) {
  return commentService
    .post(`/${id}/update`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function deleteComment(id) {
  return commentService
    .post(`/${id}/delete`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
