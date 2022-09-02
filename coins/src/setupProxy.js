const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
  app.use("/api",
    createProxyMiddleware({
      target: "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1162072500",
      changeOrigin: true
      
    })
  )
}