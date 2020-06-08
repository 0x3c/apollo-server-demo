const user = require("./user");
const { delay, createId, randInt } = require("../utils");
const { getChars, getChar } = require("../utils/char");

const gerUserRand = () => {
  const users = user.getAllSync();
  const randIdx = randInt(0, users.length - 1);
  return users[randIdx];
};

const createReport = () => {
  const title = getChars(randInt(5, 10));
  const content = getChars(randInt(0, 30));
  const { id: authorId } = gerUserRand();
  const comments = Array.from({ length: randInt(4, 10) }).map((_, i) =>
    getChars(4, 4 + i * 4)
  );
  return {
    id: createId(),
    type: 1,
    title,
    content,
    comments,
    authorId,
  };
};

const createActivity = () => {
  const title = getChars(randInt(5, 10));
  const { id: authorId } = gerUserRand();
  const content = getChars(randInt(0, 30));
  return {
    id: createId(),
    type: 2,
    title,
    content,
    authorId,
  };
};

const list = [];
list.push({
  id: "100",
  type: 1,
  title: "测试研报",
  authorId: "100",
  content: "测试研报",
  comments: [],
});
const initActivity = () => {
  const length = randInt(5, 10);
  const datas = Array.from({ length }).map(
    randInt(0, 1) % 2 ? createActivity : createReport
  );
  list.push(...datas);

  const users = user.getAllSync();
  users.map((usr) => {
    const activities = list.filter((activity) => activity.authorId === usr.id);
    usr.activities = activities;
  });
};

initActivity();

const getReports = async () => {
  await delay(500);
  return list.filter((activity) => activity.type === 1);
};
const getTelmeetings = async () => {
  await delay(500);
  return list.filter((activity) => activity.type === 2);
};
const getActivities = async (authorId) => {
  await delay(700);
  if (authorId) {
    return list.filter((activity) => activity.authorId === authorId);
  }
  return list;
};
module.exports = {
  getReports,
  getTelmeetings,
  getActivities,
};
