import axios from "axios";
import * as CONSTS from "../utils/consts";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
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

const storyService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/story`,
});

export function createStory(info) {
  return storyService
    .post(`/create`, info, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function getStory(id) {
  return storyService
    .get(`/${id}`
      // , {
      // headers: {
      //   Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      // },
      // }
    )
    .then(successStatus)
    .catch(internalServerError);
}

export function updateStory(id) {
  return storyService
    .post(`/${id}/update`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function deleteStory(id) {
  return storyService
    .post(`/${id}/delete`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
