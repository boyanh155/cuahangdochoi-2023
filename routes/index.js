const userRoute = require("./user")

const router = (app) => {
    app.use("/user", userRoute)
}

module.exports = {
    router
}