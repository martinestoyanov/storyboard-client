import axios from "axios";
import * as CONSTS from "../utils/consts";
import { QUERY } from "../utils/queryConsts";

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
  console.log("comment services", res)
  return {
    status: true,
    data: res.data,
  };
}

export function createComment(info) {
  return commentService
    .post("/create", info, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch((err) => internalServerError(err));
}

export function getComments(params) {
  let qParams = "";
  if (Object.keys(params)?.length > 0) {
    qParams = "?";
    const {
      [QUERY.RANGE.START]: start,
      [QUERY.RANGE.END]: end,
      [QUERY.POPULATE]: populate,
      [QUERY.NAME.USER]: user,
      [QUERY.NAME.VIDEO]: video,
      [QUERY.NAME.STORY]: story,
    } = params;
    let priorParams = false;
    if (start && end) {
      qParams += `${QUERY.RANGE.START}=${start}&${QUERY.RANGE.END}=${end}`;
      priorParams = true;
    }
    if (populate && Array.isArray(populate)) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.POPULATE}=${populate.join(`&${QUERY.POPULATE}=`)}`;
      priorParams = true;
    }
    if (user && video) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.NAME.USER}=${user}&${QUERY.NAME.VIDEO}=${video}`;
      priorParams = true;
    } else if (user && story) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.NAME.USER}=${user}&${QUERY.NAME.STORY}=${story}`;
      priorParams = true;
    } else if (user) {
      if (priorParams) qParams += "&";
      qParams += `${QUERY.NAME.USER}=${user}`;
      priorParams = true;
    }
  }
  return commentService
    .get(`/index${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function getComment(id, params) {
  let qParams = "";
  if (params) {
    const { [QUERY.POPULATE]: relationships } = params;
    qParams = `?${QUERY.POPULATE}=${relationships.join(`&${QUERY.POPULATE}=`)}`;
  }
  return commentService
    .get(`/${id}${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function updateComment(id, info) {
  return commentService
    .post(`/${id}/update`, info, {
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
