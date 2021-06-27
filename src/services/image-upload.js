import axios from "axios";

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

const imageUploadService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export function avatarUpload(file) {
  const formData = new FormData();
  formData.append("pictureURL", file);
  return imageUploadService
    .post("/upload", formData)
    .then(successStatus)
    .catch(internalServerError);
}
