const fs = require("fs");

// Lectura de forma Sincronica
// const data = fs.readFileSync('archivo.txt', 'utf-8');
// console.log("Contenido de Data", data);

// Lectura de forma Asincrona
// fs.readFile('archivo.txt', 'utf-8', (error, data) => {
//     if (error) return console.error("Error ocurrido: ", error);
//     console.log("Contenido de Data", data);
// })

// Crear un Archivo y escribir en El
// Sincronica
// fs.writeFileSync('nuevo.txt', 'Hola desde el Nuevo Archivo');
// console.log("El Archivo fue generado correctamente");
// const nuevo = fs.readFileSync('nuevo.txt', 'utf-8');
// console.log("Contenido de Data", nuevo);

// Asincronicamente
// fs.writeFile('nuevoAsync.txt', 'Hola desde un nuevo archivo Asincrono', (err) => {
//     if(err) return console.error("Error: ", err);
//     console.log("El Archivo Asincrono fue generado correctamente");
// });

// Agregar contenido a un archivo existente (append)
// fs.appendFile('log.txt', '\nNueva linea agregada', (err) => {
//     if(err) return console.error("Error: ", err);
//     console.log("El Archivo log.txt' tiene una nueva linea agregada");
// })

// Verificar si un archivo existe
// if(fs.existsSync('archivo.txt')){
//     console.log("El Archivo archivo.txt Existe");
// } else{
//     console.error("Error, el archivo no existe");
// }

// Eliminar un Archivo
// fs.unlink('./ejemplo/archivo_borrar.txt', (err) => {
//     if(err) return console.error("Error, el archivo no existe", err);
//     console.log("El Archivo archivo_borrar.txt fue borrado exitosamente.!");
// });

// Crear una carpeta
// fs.mkdir('nueva_carpeta', (err) => {
//     if(err) return console.error("Error, la carpeta no pudo crearse", err);
//     console.log("La carpeta nueva_carpeta, fue creada exitosamente.!");
// });

// Leer el contenido completo de un directorio
// fs.readdir('.', (err, files) => {
//     if(err) return console.error("Error, ", err);
//     console.log("Archivos existentes: ", files);
// });

// Obtener la informacion de un archivo
// fs.stat('archivo.txt', (err, stats) => {
//     if(err) return console.error("Error, ", err);
//     console.log("Tamaño: ", stats.size, ' bytes');
//     console.log('¿Es un Archivo? ', stats.isFile());
//     console.log('¿Es un Directorio? ', stats.isDirectory());
// })

// Renombrar o mover un Archivo
// fs.rename('./nueva_carpeta/viejo.txt', 'ejemplo/nuevo.txt', (err) => {
//     if(err) return console.error("Error, ", err);
//     console.log('El archivo fue renombrado correctametne');
// })