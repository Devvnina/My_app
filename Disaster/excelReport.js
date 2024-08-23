const XLSX = require('xlsx');

// Cargar el archivo Excel
const workbook = XLSX.readFile('DISASTERS/DISASTERS1.csv');

// Obtener la primera hoja del archivo
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convertir la hoja a un objeto JSON
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Generar el informe
// Aquí puedes realizar las operaciones y análisis necesarios con los datos

// Ejemplo: Imprimir los datos en la consola
console.log(data);
