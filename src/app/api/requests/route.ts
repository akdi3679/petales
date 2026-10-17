export async function POST() {
  return Response.json(
    {
      ok: false,
      message:
        "Maquette V1 : les demandes événements/collaborations ne sont pas encore envoyées. Cette route est volontairement inactive.",
    },
    {
      status: 501,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}