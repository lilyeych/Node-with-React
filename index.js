const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// PORT is in all caps to tell others constant that should not be changed lightly
const PORT = process.env.PORT || 5000;
app.listen(PORT);