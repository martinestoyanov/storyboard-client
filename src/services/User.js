import axios from "axios";
import * as CONSTS from "../utils/consts";
import { QUERY } from "../utils/queryConsts";

const userService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/user`,
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

export function getUsers(params) {
  let qParams = "";
  if (Object.keys(params)?.length > 0) {
    qParams = "?";
    const {
      [QUERY.RANGE.START]: start,
      [QUERY.RANGE.END]: end,
      [QUERY.POPULATE]: populate,
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
  }
  return userService
    .get(`/index${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function getUser(id, params) {
  let qParams = "";
  if (params) {
    const { [QUERY.POPULATE]: relationships } = params;
    qParams = `?${QUERY.POPULATE}=${relationships.join(`&${QUERY.POPULATE}=`)}`;
  }
  return userService
    .get(`/${id}${qParams}`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function updateUser(id, info) {
  return userService
    .post(`/${id}/update`, info ,  {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
