module.exports = {
  Query: {
    users: async (parent, args, { db }, obj) => {
      return db.user.getAll();
    },
  },
  Mutation: {
    deleteUser: async (parent, { id }, { db }, obj) => {
      if (!id) {
        throw new Error("id 不能为空");
      }
      return await db.user.remove(id);
    },
    putUser: async (parent, { id, info }, { db }, obj) => {
      if (!id) {
        throw new Error("id 不能为空");
      }
      return await db.user.update({ id, ...info });
    },
    addUser: async (parent, { info }, { db }, obj) => {
      return await db.user.create(info);
    },
  },
  User: {
    activities: async (parent, args, { db }, obj) => {
      return await db.activity.getActivities(parent.id);
    },
  },
};
