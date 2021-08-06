const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./services/auth.js');
const PORT = 5000







mongoose
  .connect(
    'mongodb://localhost:27017/react-jwt-login',
    //'mongodb://localhost:27017/rakcord',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



/*

auth.encode({ name: 'r' }).then(a => console.log(a))
auth.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiciIsImlhdCI6MTYyNzc3MTAwNywiZXhwIjoxNjU5MzI3OTMzfQ.qtNZclyinGFRBp6tPtcx0aW7_iDRs_-Ui3OuJ5sCHQI').then(a => console.log(a))

*/

app.use(express.urlencoded({ extended: true }));
app.use(cors())




app.get('/', function (req, res) {
    res.json({ message: 'react-jwt-login backend' })
})



app.use('/api/auth', require('./router/auth.js'));


app.listen(PORT, console.log('Backend Started PORT:' + PORT))