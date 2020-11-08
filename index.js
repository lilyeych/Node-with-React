const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

require('./routes/authRoutes')(app);

// PORT is in all caps to tell others constant that should not be changed lightly
const PORT = process.env.PORT || 5000;
app.listen(PORT);