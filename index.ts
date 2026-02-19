// 1️⃣ Identificadores Técnicos
type Hexadecimal = `0x${string}`;
type Binary = `0b${string}`;

const productId: Hexadecimal = "0xA1F4C9";
const warehouseCode: Binary = "0b10101001";

// 2️⃣ Estado de Disponibilidad
const isCoffeeMakerActive: boolean = true;

// 3️⃣ Registro de Lote (Tupla Heterogénea)
const batchRecord: [Date, number, string] = [
  new Date("2025-02-18"),
  1001,
  "Proveedor Central"
];

// 4️⃣ Historial de Precios (Arreglo con Unión)
const priceHistory: (Date | string[])[] = [
  new Date("2025-01-10"),
  ["Subió 10%", "Ajuste por inflación"],
  new Date("2025-02-01"),
  ["Descuento especial", "Promoción de temporada"]
];

// 5️⃣ Coordenadas de Entrega (Tupla Numérica)
const deliveryCoordinates: [number, number, number] = [
  19.4326,   // Latitud
  -99.1332,  // Longitud
  2240       // Altitud en metros
];

console.log("Fase 2 completada correctamente");
