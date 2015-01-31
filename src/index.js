'use strict';

var express = require('express'),
    compression = require('compression'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.set('path', (process.env.PUBLIC_PATH || 'public'));

app.use(compression());
app.use(express.static(__dirname + '/' + app.get('path')));

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
