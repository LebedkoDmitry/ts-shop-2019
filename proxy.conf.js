// see https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
const PROXY_CONFIG = {
  "/api": {
    target: "http://localhost:8080",
    secure: false,
    changeOrigin: false,
    logLevel: "debug",
    // bypass: function (req, res, proxyOptions) {
    //   console.log(req);
    //   console.log(res);
    //   console.log(proxyOptions);
    // },
    onProxyRes: (proxyRes, req, res) => {
      // console.log(proxyRes.headers['set-cookie']);
      // if (!res.headers) {
      //   res.headers = [];
      // }
      // res.headers['set-cookie'] = proxyRes.headers['set-cookie'];
      // console.log(res.headers['set-cookie']);
      // if (proxyRes.headers) {
      //   res.setHeader('set-cookie', proxyRes.getHeader['set-cookie']); // add new header to response
      //   console.log(res.headers['set-cookie']);
      // }
    }
  }
};

module.exports = PROXY_CONFIG;
