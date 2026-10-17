export type MockOrderStatus =
  | "nouvelle"
  | "confirmee"
  | "preparation"
  | "terminee";

export type MockRequestStatus = "nouvelle" | "contactee" | "archivee";

export type MockOrderLine = {
  name: string;
  quantity: number;
  priceCents: number;
};

export type MockOrder = {
  id: string;
  reference: string;
  status: MockOrderStatus;
  createdAt: string;
  desiredDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  fulfillment: "retrait" | "livraison";
  address?: string;
  notes?: string;
  totalCents: number;
  lines: MockOrderLine[];
};

export type MockRequest = {
  id: string;
  type: string;
  eventDate: string;
  guestCount: string;
  location: string;
  budget: string;
  name: string;
  email: string;
  message: string;
  status: MockRequestStatus;
  createdAt: string;
};

export const orderStatusLabels: Record<MockOrderStatus, string> = {
  nouvelle: "Nouvelle",
  confirmee: "Confirmée",
  preparation: "En préparation",
  terminee: "Terminée",
};

export const requestStatusLabels: Record<MockRequestStatus, string> = {
  nouvelle: "Nouvelle",
  contactee: "Contactée",
  archivee: "Archivée",
};

export const mockOrders: MockOrder[] = [
  {
    id: "cmd-001",
    reference: "MEP-2026-1001",
    status: "nouvelle",
    createdAt: "2026-08-01T09:20:00.000Z",
    desiredDate: "2026-08-10",
    customerName: "Marie Dupont",
    customerEmail: "marie.dupont@example.fr",
    customerPhone: "06 12 34 56 78",
    fulfillment: "retrait",
    notes: "Retrait en fin de journée si possible.",
    totalCents: 6800,
    lines: [
      {
        name: "Bouquet pivoines",
        quantity: 1,
        priceCents: 3900,
      },
      {
        name: "Coffret roses pastel",
        quantity: 1,
        priceCents: 2900,
      },
    ],
  },
  {
    id: "cmd-002",
    reference: "MEP-2026-1002",
    status: "confirmee",
    createdAt: "2026-07-30T14:05:00.000Z",
    desiredDate: "2026-08-12",
    customerName: "Camille Bernard",
    customerEmail: "camille.bernard@example.fr",
    customerPhone: "07 98 76 54 32",
    fulfillment: "livraison",
    address: "12 rue des Fleurs, 59000 Lille",
    totalCents: 5900,
    lines: [
      {
        name: "Composition champêtre",
        quantity: 1,
        priceCents: 5900,
      },
    ],
  },
  {
    id: "cmd-003",
    reference: "MEP-2026-1003",
    status: "preparation",
    createdAt: "2026-07-28T10:45:00.000Z",
    desiredDate: "2026-08-05",
    customerName: "Louise Moreau",
    customerEmail: "louise.moreau@example.fr",
    customerPhone: "06 45 67 89 01",
    fulfillment: "retrait",
    notes: "Cadeau d’anniversaire, emballage soigné.",
    totalCents: 3800,
    lines: [
      {
        name: "Mini fleurs à offrir",
        quantity: 2,
        priceCents: 1900,
      },
    ],
  },
];

export const mockRequests: MockRequest[] = [
  {
    id: "req-001",
    type: "Mariage",
    eventDate: "2026-09-12",
    guestCount: "80",
    location: "Lille",
    budget: "300  à 500 ",
    name: "Camille Bernard",
    email: "camille.bernard@example.fr",
    message:
      "Nous aimerions des fleurs de guimauve pour le dessert et quelques cadeaux d’invités.",
    status: "nouvelle",
    createdAt: "2026-07-29T18:30:00.000Z",
  },
  {
    id: "req-002",
    type: "Collaboration professionnelle",
    eventDate: "2026-10-03",
    guestCount: "40",
    location: "Paris",
    budget: "À discuter",
    name: "Studio Fleur",
    email: "contact@studiofleur.example",
    message:
      "Nous cherchons un partenariat pour une vitrine éphémère et un lancement produit.",
    status: "contactee",
    createdAt: "2026-07-25T09:10:00.000Z",
  },
];