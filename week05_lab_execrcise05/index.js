const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs'); // 

// Creating a new HTML file named home.html
const htmlContent = '<h1>Welcome to ExpressJs Tutorial</h1>';
fs.writeFileSync('home.html', htmlContent);
router.get('/home', (req, res) => {
  // Reading the contents of home.html and sending it as a response
  const htmlFile = fs.readFileSync('home.html', 'utf8');
  res.send(htmlFile);
});

router.get('/profile', (req, res) => {
  // Reading the contents of user.json file
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      try {
        // Parsing the JSON data and sending it as a JSON response
        const userData = JSON.parse(data);
        res.json(userData);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).send('Internal Server Error');
      }
    }
  });
});

router.get('/login', (req, res) => {
  const { username, password } = req.query;
  // Read the contents of user.json file
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      try {
        const userData = JSON.parse(data);
        if (userData.username === username && userData.password === password) {
          res.json({
            status: true,
            message: 'User Is valid',
          });
        } else if (userData.username !== username) {
          res.json({
            status: false,
            message: 'User Name is invalid',
          });
        } else {
          res.json({
            status: false,
            message: 'Password is invalid',
          });
        }
      } catch (parseError) {
        console.error(parseError);
        res.status(500).send('Internal Server Error');
      }
    }
  });
});

router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8081));
});