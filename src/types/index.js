const path = require("path");
const { loadFiles } = require("@graphql-toolkit/file-loading");
const { mergeTypeDefs } = require("@graphql-toolkit/schema-merging");

const typeArray = loadFiles(path.resolve(__dirname));

module.exports = mergeTypeDefs(typeArray);
