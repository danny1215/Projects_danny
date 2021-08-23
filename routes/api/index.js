const router = require("express").Router();
const developerRoutes = require("./developers");
const projectRoutes = require("./projects");

//  routes
router.use("/developer", developerRoutes);
router.use("/project", projectRoutes);

module.exports = router;
