var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var handlerbars = require('handlebars');

//rutas de acceso
var indexRouter = require('./routes/index');
var fotografiaRouter = require('./routes/fotografia');
var modeladoRouter = require('./routes/modelado');
var videoRouter = require('./routes/video');
var disenoRouter = require('./routes/diseno');
var sobremiRouter = require('./routes/sobre-mi');
var sobremiCocinaRouter = require('./routes/sobre-mi-cocina');
var sobremiFreelanceRouter = require('./routes/sobre-mi-freelance');
var blogRouter = require('./routes/blog');
var registroRouter = require('./routes/registro');
var loginRouter = require('./routes/login');
var apiRouter = require('./api/api');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname+'/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
handlerbars.registerPartial('partials/navbar', '{{navbar}}');
handlerbars.registerPartial('partials/footer', '{{footer}}');
handlerbars.registerPartial('partials/linea-tiempo', '{{linea-tiempo}}');
handlerbars.registerPartial('partials/estrellas','{{estrellas}}');

handlerbars.registerPartial('partials/skill-admin', '{{skill-admin}}');
handlerbars.registerPartial('partials/skill-caliente', '{{skill-caliente}}');
handlerbars.registerPartial('partials/skill-fria', '{{skill-fria}}');
handlerbars.registerPartial('partials/skill-normatividad', '{{skill-normatividad}}');
handlerbars.registerPartial('partials/skill-panaderia', '{{skill-panaderia}}');
handlerbars.registerPartial('partials/skill-parilla', '{{skill-parrilla}}');
handlerbars.registerPartial('partials/skill-reposteria', '{{skill-reposteria}}');
handlerbars.registerPartial('partials/skill-servicio', '{{skill-servicio}}');
handlerbars.registerPartial('partials/visorGaleria', '{{visorGaleria}}');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/fotografia', fotografiaRouter);
app.use('/modelado', modeladoRouter);
app.use('/video', videoRouter);
app.use('/diseno', disenoRouter);
app.use('/sobre-mi', sobremiRouter);
app.use('/sobre-mi/cocina',sobremiCocinaRouter);
app.use('/sobre-mi/freelance', sobremiFreelanceRouter);
app.use('/blog', blogRouter);
app.use('/blog/registro', registroRouter);
app.use('/blog/login', loginRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
