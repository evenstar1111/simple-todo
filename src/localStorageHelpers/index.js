export const saveInSession = (key, value) => {
  if (process.browser) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromSession = (key) => {
  if (process.browser) {
    return JSON.parse(sessionStorage.getItem(key));
  }
};

//
