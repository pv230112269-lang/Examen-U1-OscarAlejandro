// Variables simples
let productId: string = "0xA1F4C9";
let warehouseCode: string = "0b10101001";
let isCoffeeMakerActive: boolean = true;

// Tupla simple
let batchRecord = [
  new Date("2025-02-18"),
  1001,
  "Proveedor Central"
];

// Historial más simple
let priceHistory = [
  new Date("2025-01-10"),
  "Subió 10%",
  new Date("2025-02-01"),
  "Descuento especial"
];

// Coordenadas
let deliveryCoordinates = [19.4326, -99.1332, 2240];

// Mostrar datos
console.log("ID Hexadecimal:", productId);
console.log("Código Binario:", warehouseCode);
console.log("Cafetera Activa:", isCoffeeMakerActive);
console.log("Registro de Lote:", batchRecord);
console.log("Historial de Precios:", priceHistory);
console.log("Coordenadas:", deliveryCoordinates);

// Convertir hexadecimal a decimal
let decimalId = parseInt(productId, 16);
console.log("ID convertido a decimal:", decimalId);

// Obtener proveedor
let supplierName = batchRecord[2];
console.log("Nombre del proveedor:", supplierName);
