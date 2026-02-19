// ==========================
// FASE 2 - Modelado de Datos
// ==========================

// 1️⃣ Identificadores Técnicos
type Hexadecimal = `0x${string}`;
type Binary = `0b${string}`;

let productId: Hexadecimal = "0xA1F4C9";
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
  19.4326,
  -99.1332,
  2240
];

// ==========================
// FASE 3 - Lógica y Análisis
// ==========================

// ✅ 1. Imprimir todos los valores iniciales
console.log("ID Hexadecimal:", productId);
console.log("Código Binario:", warehouseCode);
console.log("Cafetera Activa:", isCoffeeMakerActive);
console.log("Registro de Lote:", batchRecord);
console.log("Historial de Precios:", priceHistory);
console.log("Coordenadas:", deliveryCoordinates);

// ✅ 2. Cambio de hexadecimal a decimal
const decimalId: number = parseInt(productId, 16);
console.log("ID convertido a decimal:", decimalId);

// ❌ Si intentamos hacer esto, TypeScript lo restringe:
// productId = 12345; // ERROR porque no es tipo Hexadecimal

// ✅ 3. Acceder únicamente al nombre del proveedor
const supplierName: string = batchRecord[2];
console.log("Nombre del proveedor:", supplierName);
