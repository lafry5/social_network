const router = require('express').Router();
const apiRoutes = require('./api');
// const htmlRoutes = require('./html/html-routes'); //not needed for challenge

router.use('/api', apiRoutes);
// router.use('/', htmlRoutes); //not needed for challenge

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;

