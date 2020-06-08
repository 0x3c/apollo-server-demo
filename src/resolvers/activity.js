const Query = {
  activities: async (parent, args, { db }, obj) => {
    return db.activity.getActivities();
  },
  activity: async (parent, args, { db }, obj) => {
    const list = await db.activity.getActivities();
    return list[0];
  },
  reports: async (parent, args, { db }, obj) => {
    return db.activity.getReports();
  },
  telmeetings: async (parent, args, { db }, obj) => {
    return db.activity.getTelmeetings();
  },
};

const Activity = {
  __resolveType(obj, context, info) {
    if (obj.type === 1) {
      return "Report";
    }
    if (obj.type === 2) {
      return "TelMeeting";
    }
    return null;
  },
};

const ActivityResult = {
  __resolveType(obj, context, info) {
    if (obj.type === 1) {
      return "Report";
    }
    if (obj.type === 2) {
      return "TelMeeting";
    }
    return null;
  },
};
const Report = {
  author(obj, args, { db }, info) {
    return db.user.getUserById(obj.authorId);
  },
};

const TelMeeting = {
  author(obj, args, { db }, info) {
    return db.user.getUserById(obj.authorId);
  },
};
module.exports = {
  Query,
  Activity,
  ActivityResult,
  Report,
  TelMeeting,
};
