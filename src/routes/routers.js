const express = require('express');
const httpGetWhoAmI = require('./controllers');

const whoAmIRouter = express.Router();

whoAmIRouter.get('/api/whoami',httpGetWhoAmI);

module.exports = whoAmIRouter;