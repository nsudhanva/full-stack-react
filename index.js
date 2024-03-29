const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/client_id.json');

require('./models/User')
require('./services/passport')

mongoose.connect(keys.web.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);