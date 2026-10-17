import Link from "next/link";
import {
  mockOrders,
  mockRequests,
  orderStatusLabels,
} from "@/data/mock-admin";
import { formatPrice } from "@/lib/format";

export default function AdminDashboardPage() {
  const estimatedTotalCents = mockOrders.reduce(
    (sum, order) => sum + order.totalCents,
    0
  );

  const newOrders = mockOrders.filter(
    (order) => order.status === "nouvelle"
  ).length;

  const newRequests = mockRequests.filter(
    (request) => request.status === "nouvelle"
  ).length;

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl">Tableau de bord</h1>

        <Link
          href="/admin/commandes"
          className="rounded-full bg-rose-deep px-5 py-2.5 text-sm font-medium text-white transition hover:bg-plum"
        >
          Voir les commandes
        </Link>
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.75rem] border border-line bg-white p-6">
          <dt className="text-sm text-cocoa">Commandes simulées</dt>
          <dd className="mt-2 font-display text-3xl">{mockOrders.length}</dd>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-white p-6">
          <dt className="text-sm text-cocoa">Nouvelles commandes</dt>
          <dd className="mt-2 font-display text-3xl">{newOrders}</dd>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-white p-6">
          <dt className="text-sm text-cocoa">Nouvelles demandes</dt>
          <dd className="mt-2 font-display text-3xl">{newRequests}</dd>
        </div>
      </dl>

      <section className="mt-8 rounded-[1.75rem] border border-line bg-white p-6">
        <h2 className="font-display text-2xl">Dernières commandes</h2>

        <ul className="mt-4 space-y-3">
          {mockOrders.slice(0, 3).map((order) => (
            <li
              key={order.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 text-sm"
            >
              <span className="font-medium text-plum">{order.reference}</span>
              <span>{order.customerName}</span>
              <span>{orderStatusLabels[order.status]}</span>
              <span>{formatPrice(order.totalCents)}</span>
              <Link
                href={`/admin/commandes/${order.id}`}
                className="font-medium text-rose-deep hover:underline"
              >
                Voir
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6 text-sm text-cocoa">
        Estimation totale simulée :{" "}
        <span className="font-semibold text-plum">
          {formatPrice(estimatedTotalCents)}
        </span>
      </p>
    </section>
  );
}