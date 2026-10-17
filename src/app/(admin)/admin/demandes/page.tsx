import { mockRequests, requestStatusLabels } from "@/data/mock-admin";

export default function AdminDemandesPage() {
  return (
    <section>
      <h1 className="font-display text-3xl">Demandes</h1>

      <p className="mt-3 max-w-prose text-sm leading-6 text-cocoa">
        Demandes simulées pour événements et collaborations. Dans la version
        réelle, chaque demande pourra être qualifiée, suivie puis convertie en
        proposition.
      </p>

      <ul className="mt-6 space-y-4">
        {mockRequests.map((request) => (
          <li
            key={request.id}
            className="rounded-[1.75rem] border border-line bg-white p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl">{request.type}</h2>
              <span className="rounded-full bg-petal px-3 py-1 text-xs font-medium text-plum">
                {requestStatusLabels[request.status]}
              </span>
            </div>

            <p className="mt-3 text-sm text-cocoa">
              {request.name} · {request.email}
            </p>

            <p className="mt-2 text-sm text-cocoa">
              Date : {request.eventDate} · Lieu : {request.location} ·
              Personnes : {request.guestCount} · Budget : {request.budget}
            </p>

            <p className="mt-4 text-sm leading-6 text-cocoa">
              {request.message}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}