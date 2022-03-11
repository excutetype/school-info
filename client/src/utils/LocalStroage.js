class LocalStorage {
  static save(items) {
    for (let item of items) {
      const key = Object.keys(item);
      window.localStorage.setItem(key, item[key]);
    }
  }

  static isExist(items) {
    for (let item of items) {
      if (!window.localStorage.getItem(item)) {
        return false;
      }
    }
    return true;
  }

  static get(items) {
    let result = {};
    for (let item of items) {
      result[item] = window.localStorage.getItem(item);
    }
    return result;
  }
}

export default LocalStorage;
