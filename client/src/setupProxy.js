// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "https://mdbs.herokuapp.com/",
//       changeOrigin: true,
//     })
//   );
// };

const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api", { target: "http://server.mdbs.monster/" }));
};

// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(proxy("/api", { target: "https://mdbs.herokuapp.com/" }));
// };
