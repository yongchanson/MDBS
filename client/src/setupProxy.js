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

//배포(prod)환경
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api", { target: "https://mdbs.herokuapp.com/" }));
};

//로컬환경
// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(proxy("/api", { target: "http://localhost:5000" }));
// };
