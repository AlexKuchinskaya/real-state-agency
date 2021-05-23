const URL_LOAD = `https://603e38c548171b0017b2ecf7.mockapi.io/homes`;
const STATUS_CODE = {
    OK: 200
}
const TIMEOUT_IN_MS = 1000;

const ajax = (method, url, onSuccess, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT_IN_MS;
    xhr.addEventListener(`load`, function () {
        if (xhr.status === STATUS_CODE.OK) {
          onSuccess(xhr.response);
        } else {
          onError(`Answer statys: ` + xhr.status + ` ` + xhr.statusText);
        }
      });
    xhr.addEventListener(`error`, function () {
    onError(`There was produced a connection mistake`);
    });
    xhr.addEventListener(`timeout`, function () {
    onError(`The request couldn't be executed in ` + xhr.timeout + `ms`);
    });
    xhr.open(method, url);
    xhr.send();
};

export const  load = (onSuccess, onError) => {
    ajax(`GET`, URL_LOAD, onSuccess, onError);
  };

