import { ImageResponse } from "next/og";

export const alt =
  "Maison de Pétales Azuréenne — Bouquets de fleurs en guimauve artisanales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf4ec",
          color: "#3b2a2e",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid #a9873e",
            borderRadius: 999,
            padding: "56px 96px",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 8, color: "#a9873e" }}>
            MAISON DE PÉTALES
          </div>
          <div style={{ fontSize: 58, fontFamily: "serif", fontStyle: "italic", color: "#a64d63" }}>
            Azuréenne
          </div>
          <div style={{ fontSize: 20, color: "#6b5559", marginTop: 8 }}>
            Bouquets de fleurs en guimauve artisanales
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}