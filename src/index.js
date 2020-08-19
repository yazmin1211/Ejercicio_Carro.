class Carro {
  constructor(marca, modelo, color, matricula, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.matricula = matricula;
    this.precio = precio;
  }
  encender() {
    console.log("Encendiendo motor...");
    setTimeout(() => console.log("Motor encendido."), 5000);
    return this;
  }
  acelerar() {
    console.log("Acelerando...");
    setTimeout(() => console.log("Carro en marcha."), 2);
    return this;
  }
  cambio1() {
    setTimeout(() => console.log("Mete primera"), 3200);
    return this;
  }
  cambio2() {
    setTimeout(() => console.log("Mete segunda"), 3200);
    return this;
  }
  cambio3() {
    setTimeout(() => console.log("Mete tercera"), 3200);
    return this;
  }
  cambio4() {
    setTimeout(() => console.log("Mete cuarta"), 3200);
    return this;
  }
  cambio5() {
    setTimeout(() => console.log("Mete quinta"), 3200);
    return this;
  }
  frenar() {
    setTimeout(() => console.log("Desacelerando..."), 4000);
    return this;
  }
  apagar() {
    setTimeout(() => console.log("Apagando motor..."), 2000);
    setTimeout(() => console.log("Motor apagado."), 3500);
  }
}
const lambo = new Carro(
  "Lamboghini",
  "Aventador",
  "Negro Cromo",
  "SAY666",
  "15M$"
);
console.log(lambo.encender());
console.log(lambo.acelerar());
console.log(lambo.cambio1());
console.log(lambo.cambio3());
console.log(lambo.frenar());

const Mercedes = new Carro(
  "Mercedes-Benz",
  "Vision EQS",
  "Azul metalizado",
  "eléctrico con 700 km de autonomía",
  "32M$"
);
console.log(Mercedes.encender());
console.log(Mercedes.acelerar());
console.log(Mercedes.cambio1());
console.log(Mercedes.cambio2());
console.log(Mercedes.cambio3());
console.log(Mercedes.frenar());

// metodos: frenar, acelerar, verPrecio, encender, apagar, cambios
