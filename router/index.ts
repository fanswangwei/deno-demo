import { Router } from "https://deno.land/x/oak/mod.ts";
import defaultGet from "./routes/default.ts";
import denoTest  from "./routes/denoTest.ts";

const router = new Router();

router.get('/', defaultGet);
router.get('/deno/test', denoTest);

export default router;