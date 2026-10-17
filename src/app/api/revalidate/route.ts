export async function POST() {
  return Response.json(
    {
      revalidated: false,
      reason: "mock",
      message:
        "Maquette V1 : aucune revalidation Sanity/CMS n'est configurée pour le moment.",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}