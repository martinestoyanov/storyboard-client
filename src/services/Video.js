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

export function getVideos(params) {
  let qParams = "";
  if (Object.keys(params)?.length === 0) {
    qParams = "?";
    const {
      [QUERY.RANGE.START]: start,
      [QUERY.RANGE.END]: end,
      [QUERY.RANDOM]: random,
      [QUERY.POPULATE]: populate,
      [QUERY.NAME.USER]: user,
      [QUERY.SEARCH]: search,
      [QUERY.GENRE]: genre,
    } = params;
    let priorParams = false;
    if (start && end) {
      qParams += `${QUERY.RANGE.START}=${start}&${QUERY.RANGE.END}=${end}`;
      priorParams = true;
    } else if (random) {
      qParams += `${QUERY.RANGE.START}=${start}&${QUERY.RANGE.END}=${end}`;
      priorParams = true;
    }
    if (populate && Array.isArray(populate)) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.POPULATE}=${populate.join(`&${QUERY.POPULATE}=`)}`;
      priorParams = true;
    }
    if (user) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.NAME.USER}=${user}`;
      priorParams = true;
    }
    if (search) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.NAME.SEARCH}=${search}`;
      priorParams = true;
    }
    if (genre) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.GENRE}=${genre}`;
      priorParams = true;
    }
  }
  return videoService
    .get(`/index${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function getVideo(id, { [QUERY.POPULATE]: relationships }) {
  const qParams = relationships
    ? `?${QUERY.POPULATE}=${relationships.join(`&${QUERY.POPULATE}=`)}`
    : "";
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
