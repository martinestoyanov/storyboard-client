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

const storyService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/story`,
});

export function topContent(info) {
  return storyService
    .post(`/top-content`)
    .then(successStatus)
    .catch(internalServerError);
}

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

export function getStories(params) {
  // console.log("params!!!!", params);
  let qParams = "";
  if (Object.keys(params)?.length > 0) {
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
      qParams += `${QUERY.RANDOM}=${random}`;
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
  return storyService
    .get(`/index${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function getStory(id, params) {
  let qParams = "";
  if (params) {
    const { [QUERY.POPULATE]: relationships } = params;
    qParams = `?${QUERY.POPULATE}=${relationships.join(`&${QUERY.POPULATE}=`)}`;
  }
  return storyService
    .get(`/${id}${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function updateStory(id, info) {
  return storyService
    .post(`/${id}/update`, info, {
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
