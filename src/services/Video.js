import axios from "axios";
import * as CONSTS from "../utils/consts";
import { QUERY } from "../utils/queryConsts";

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

const videoService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/video`,
});

export function createVideo(info) {
  return videoService
    .post(`/create`, info, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function getVideo(id, ...relations) {
  const qParams = `?${QUERY.POPULATE}=${relations.join(`&${QUERY.POPULATE}=`)}`;
  return videoService
    .get(`/${id}${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function updateVideo(id) {
  return videoService
    .post(`/${id}/update`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function deleteVideo(id) {
  return videoService
    .post(`/${id}/delete`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
