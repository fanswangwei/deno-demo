import { Response } from "https://deno.land/x/oak/mod.ts";
const denoTest = ({response}: {response: Response}) => {
  response.body = {msg: "Hello default deno!"};
}
export default denoTest;