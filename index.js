const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// PORT is in all caps to tell others constant that should not be changed lightly
const PORT = process.env.PORT || 42305;
app.listen(PORT);