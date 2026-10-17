export async function GET() {
  return Response.json(
    {
      ok: false,
      message:
        "Maquette V1 : l'authentification réelle n'est pas encore activée.",
    },
    {
      status: 501,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST() {
  return GET();
}