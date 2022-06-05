const proxy  = require('http-proxy-middleware')

module.exports = function(App) {
    App.use(
        proxy(
            proxy("/users", {
                target: "https://jsonplaceholder.typicode.com/",
                changeOrigin: true
            })
        )
    )
}