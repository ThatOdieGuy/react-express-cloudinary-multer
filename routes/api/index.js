const router = require("express").Router();
const uploadRoutes = require("./upload");

/**
 * API routes 
 * Each call of `router.use` here defines a new sub path under `/api` that uses a new router.
 *   (Everything is under `/api` because `../routes/index.js` called `router.use("/api", apiRoutes);`)
 * 
 * Ex. This line will setup routes under `/api/login/` which may contain routes like `/api/login/authenticate`
 * (You would need to define loginRoutes, this is just an example)
 * `router.use("/login", loginRoutes);`
 */

router.use("/upload", uploadRoutes)

module.exports = router;