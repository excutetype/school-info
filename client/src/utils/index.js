function setLocalStorage(items) {
  for (let item of items) {
    const key = Object.keys(item);
    window.localStorage.setItem(key, item[key]);
  }
}
function isExistLocalStorage(items) {
  for (let item of items) {
    if (!window.localStorage.getItem(item)) {
      return false;
    }
  }
  return true;
}
function getLocalStorage(items) {
  let result = {};
  for (let item of items) {
    result[item] = window.localStorage.getItem(item);
  }
  return result;
}

export { setLocalStorage, isExistLocalStorage, getLocalStorage };
