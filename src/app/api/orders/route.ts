export async function POST() {
  return Response.json(
    {
      ok: false,
      message:
        "Maquette V1 : la commande réelle n'est pas encore activée. Cette route est volontairement inactive.",
    },
    {
      status: 501,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}