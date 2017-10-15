import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(compression());

app.use('/', express.static('build/public'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
