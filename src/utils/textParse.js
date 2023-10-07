const isAlpha = (char) => {
  const alphas = new Set(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  return true ? alphas.has(char) : false;
};

const counter = (iter) => {
  const dict = {};
  const n = iter.length;
  for (let i = 0; i < n; i++) {
    if (iter[i] in dict) dict[iter[i]]++;
    else dict[iter[i]] = 1;
  }
  return dict;
};

export { isAlpha, counter };
