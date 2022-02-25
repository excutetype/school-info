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

export { setLocalStorage, isExistLocalStorage };
