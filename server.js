const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const moonRouter = require('./routes/moonData');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
app.use(express.static(path.join(__dirname, 'build')));

app.use('/moondata', moonRouter);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running on port ${PORT}`);
});

module.exports = app;