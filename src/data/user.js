const { delay, createId } = require("../utils");

const lastname = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王"];
const firstname = ["亮", "磊", "浩", "天", "国", "奇", "峥", "新"];
const createName = () => {
  const firstnameIdx = Math.floor(Math.random() * firstname.length);
  const lastnameIdx = Math.floor(Math.random() * lastname.length);
  return lastname[lastnameIdx] + firstname[firstnameIdx];
};
const createUser = ({
  id = createId(),
  name = "",
  mobile = "",
  email = "",
  description = "",
  avatar = "",
}) => {
  return { id, name, mobile, email, description, avatar };
};
const list = Array.from({ length: 8 }, () => ({
  ...createUser({ name: createName() }),
}));
list.unshift(
  createUser({
    id: "100",
    name: "管理员",
    mobile: "13111111111",
    email: "admin@xx.com",
    description: "内建测试",
  })
);

const getAll = async () => {
  await delay(1000);
  return list;
};
const getAllSync = () => list;

const getUserById = (_id) => {
  return list.find(({ id }) => _id === id);
};

const create = async ({ name, mobile, email, description, avatar }) => {
  const newUser = createUser({ name, mobile, email, description, avatar });
  list.push(newUser);
  return newUser;
};

const remove = async (id) => {
  const index = list.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new Error("该用户不存在");
  }
  const removed = list.splice(index, 1);
  return removed[0];
};

const update = async ({ id, name, mobile, email, description, avatar }) => {
  const index = list.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new Error("该用户不存在");
  }
  list[index] = {
    id,
    name,
    mobile,
    email,
    description,
    avatar,
  };
  return list[index];
};

module.exports = {
  getAllSync,
  getAll,
  getUserById,
  create,
  remove,
  update,
};
