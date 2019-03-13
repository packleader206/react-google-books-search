
// Requirements
const router = require('express').Router();
const savedbooksRoutes = require('./savedbooks');

// Router
router.use('/savedbooks', savedbooksRoutes);

// Export
module.exports = router;