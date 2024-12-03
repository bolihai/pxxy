const path = require("path");

/**
 * 所有请求都发给index.html
 * @param {*} dist_dir
 * @returns
 */
function root(dist_dir) {
  return function (request, response) {
    response.sendFile(path.join(dist_dir, "index.html"), function (err) {
      if (err) {
        response.status(500).send(err);
      }
    });
  };
}

module.exports = {
  root,
};
