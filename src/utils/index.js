const delay = async (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const createId = () => String(10000 + Math.ceil(Math.random() * Date.now()));

const randInt = (from, to) => Math.ceil(from + Math.random() * (to - from));

module.exports = {
  delay,
  createId,
  randInt,
};
