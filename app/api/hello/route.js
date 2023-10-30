import { binding } from "cf-bindings-proxy";

export const runtime = "edge";

export async function GET() {
  const value = await binding("FOLDER_CMS_PREVIEW").get("test");
  console.log(value);
  return new Response(value, {
    status: 200,
  });
}
