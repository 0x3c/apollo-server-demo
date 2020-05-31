const delay = async (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const createId = () => String(10000 + Math.ceil(Math.random() * Date.now()));

module.exports = {
  delay,
  createId,
};
