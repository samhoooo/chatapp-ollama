/* eslint-disable turbo/no-undeclared-env-vars */
export async function GET() {
  return Response.json({ message: "I am alive!" });
}

type RequestBody = { message: string };
export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  if (!process.env.NEXT_PUBLIC_API_PATH) {
    throw new Error("API_PATH not set");
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data);
}
