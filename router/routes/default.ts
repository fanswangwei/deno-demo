import { Response } from "https://deno.land/x/oak/mod.ts";
const defaultGet = ({response}: {response: Response}) => {
  response.body = "Hello default deno!"
}
export default defaultGet;