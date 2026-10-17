import Link from "next/link";
import { mockOrders, orderStatusLabels } from "@/data/mock-admin";
import { formatPrice } from "@/lib/format";

export default function AdminCommandesPage() {
  return (
    <section>
      <h1 className="font-display text-3xl">Commandes</h1>

      <p className="mt-3 max-w-prose text-sm leading-6 text-cocoa">
        Liste simulée des commandes. Dans la version réelle, Emmanuelle pourra
        suivre les demandes reçues, changer leur statut et retrouver les
        informations client.
      </p>

      <div className="mt-6 overflow-x-auto rounded-[1.75rem] border border-line bg-white p-2">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="text-cocoa">
              <th className="px-4 py-3">Référence</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Date souhaitée</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-t border-line">
                <td className="px-4 py-3 font-medium text-plum">
                  {order.reference}
                </td>
                <td className="px-4 py-3">{order.customerName}</td>
                <td className="px-4 py-3">{order.desiredDate}</td>
                <td className="px-4 py-3">
                  {orderStatusLabels[order.status]}
                </td>
                <td className="px-4 py-3">
                  {formatPrice(order.totalCents)}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/commandes/${order.id}`}
                    className="font-medium text-rose-deep hover:underline"
                  >
                    Voir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}