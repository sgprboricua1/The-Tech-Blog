const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;


const hbs = exphbs.create({});


app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'),


app.use(controllers);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
       console.log('server started!!'); 
       })
   }); 