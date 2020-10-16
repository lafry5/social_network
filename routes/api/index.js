const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
// changed comments to thoughts and pizza to user

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
