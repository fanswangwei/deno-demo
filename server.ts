import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from './config.ts'
// const router = require('./router/index.js')
import router from './router/index.ts'
import notFound from "./router/routes/notFound.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);