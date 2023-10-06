const isAlpha = (char) => {
  const alphas = new Set(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  return true ? alphas.has(char) : false;
};

export { isAlpha };
