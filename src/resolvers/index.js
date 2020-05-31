const path = require("path");
const { loadFiles } = require("@graphql-toolkit/file-loading");
const { mergeResolvers } = require("@graphql-toolkit/schema-merging");

const typeArray = loadFiles(path.resolve(__dirname));

module.exports = mergeResolvers(typeArray);
