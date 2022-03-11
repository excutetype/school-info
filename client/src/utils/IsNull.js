class IsNull {
  static object(item) {
    const result = Object.values(item).every((value) => {
      if (value === null) {
        return true;
      }
      return false;
    });
    return result;
  }
}

export default IsNull;
