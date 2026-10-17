import Link from "next/link";
import { notFound } from "next/navigation";
import { mockOrders, orderStatusLabels } from "@/data/mock-admin";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return mockOrders.map((order) => ({ id: order.id }));
}

export default async function AdminCommandeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/admin/commandes"
        className="rounded-md text-sm text-cocoa transition hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
      >
        ← Retour aux commandes
      </Link>

      <h1 className="mt-6 font-display text-3xl">
        Commande {order.reference}
      </h1>

      <p className="mt-3 text-sm text-cocoa">
        Statut : {orderStatusLabels[order.status]} · Créée le{" "}
        {new Date(order.createdAt).toLocaleDateString("fr-FR")}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-line bg-white p-6">
          <h2 className="font-display text-2xl">Client</h2>

          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-medium text-plum">Nom</dt>
              <dd className="mt-1 text-cocoa">{order.customerName}</dd>
            </div>

            <div>
              <dt className="font-medium text-plum">E-mail</dt>
              <dd className="mt-1 text-cocoa">{order.customerEmail}</dd>
            </div>

            <div>
              <dt className="font-medium text-plum">Téléphone</dt>
              <dd className="mt-1 text-cocoa">{order.customerPhone}</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-[1.75rem] border border-line bg-white p-6">
          <h2 className="font-display text-2xl">Organisation</h2>

          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-medium text-plum">Date souhaitée</dt>
              <dd className="mt-1 text-cocoa">{order.desiredDate}</dd>
            </div>

            <div>
              <dt className="font-medium text-plum">Mode</dt>
              <dd className="mt-1 text-cocoa">
                {order.fulfillment === "livraison"
                  ? "Livraison"
                  : "Retrait"}
              </dd>
            </div>

            {order.address ? (
              <div>
                <dt className="font-medium text-plum">Adresse</dt>
                <dd className="mt-1 text-cocoa">{order.address}</dd>
              </div>
            ) : null}

            {order.notes ? (
              <div>
                <dt className="font-medium text-plum">Notes</dt>
                <dd className="mt-1 text-cocoa">{order.notes}</dd>
              </div>
            ) : null}
          </dl>
        </article>
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-line bg-white p-6">
        <h2 className="font-display text-2xl">Produits</h2>

        <ul className="mt-4 space-y-3">
          {order.lines.map((line, index) => (
            <li
              key={`${order.id}-${line.name}-${index}`}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 text-sm"
            >
              <span>
                {line.quantity} × {line.name}
              </span>
              <span>{formatPrice(line.priceCents * line.quantity)}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-right text-base font-semibold text-plum">
          Total : {formatPrice(order.totalCents)}
        </p>
      </div>
    </section>
  );
}