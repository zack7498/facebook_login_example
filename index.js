/*jshint esversion: 6 */
(function() {
  'use strict';


  const express = require('express'); 
  const compression = require('compression');
  const morgan = require('morgan');
  const timeout = require('connect-timeout'); //用於express設定逾時
  const path = require('path');
  const serveFavicon = require('serve-favicon');

  const PORT = 7777;
  let app = express();

  app.set('trust proxy', 1);
  app.set('view engine', 'pug');
  app.set('views', `${__dirname}/views/`);
  app.use(morgan('common'));
  app.use(timeout('20s')); 
  app.use(compression());
  app.use(serveFavicon(`${__dirname}/favicon.ico`));

  app.get('/', function(req, res, next){
      return res.render('index');
  });

  app.listen(PORT, function() {
    console.log(`Service is ready on port ${PORT}`);
  });
}());
