setTimeout(() => {
  console.log("Primer timeout");
}, 1000);

console.log("Comienza el programa...");

console.log("Termina el programa");

setTimeout(() => {
  console.log("Segundo timeout");
}, 0);
