import app from './app.js';

app.set('port', process.env.PORT || 8800);

const server = app.listen(app.get('port'), () =>
  console.log(`App listening on port ↔ ${server.address().port}`.cyan.bold)
);
