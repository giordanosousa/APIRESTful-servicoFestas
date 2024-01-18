const router = require("express").Router();

// Services router
const servicesRouter = require("./services");
const partyRouter = require("./parties");

router.use("/", servicesRouter,  partyRouter);

module.exports = router;