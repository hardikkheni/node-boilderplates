import express from 'express';

import router from '@/routes';
import { response } from '@/utils/helpers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.response.respond = response.respond;
export default app;
