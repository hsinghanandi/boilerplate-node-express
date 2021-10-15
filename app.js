const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server running on port 3000'));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(req.originalUrl);
  res.send('<h1>Hi there!</h1>');
});
