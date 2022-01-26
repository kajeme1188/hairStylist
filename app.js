const express = require("express");
const exphbs = require('express-handlebars');
const path = require("path");
let logger = require("morgan")


// //ROUTES
const indexRoute = require("./routes/index");
const contactRoute = require('./routes/contact')
const galleryRoute = require('./routes/gallery')
const servicesRoute = require('./routes/services')

// if(process.env.NODE_ENV === 'development'){
//     require('dotenv').config();
// }

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  
app.use(express.static(path.join(__dirname, "public")));


app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs'); 

app.use("/", indexRoute);
app.use("/contact", contactRoute);
app.use("/gallery", galleryRoute);
app.use("/services", servicesRoute);

// // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    console.log("Error func kicking in")
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}; 
    // render the error page
    res.status(err.status || 500);
    res.render('error');
    // app.locals.res = res;
    // next();
  });
  
  module.exports = app;