// TIENDA VIRTUAL HARDWARE PC


class producto {
    constructor (nombre, caracteristicas, precio){
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }

descuentos () {
this.descuento = this.precio / 100 * 95;
}

}

//Declaro un array de productos para almacenar objetos

const stock = [];
stock.push(new producto ("Placa de Video GeForce MSI G210", "1GB DDR3 Low Profile", "6200"));
stock.push(new producto ("Placa de Video GALAX GeForce GTX 1660 Ti", "6GB GDDR6 1-Click OC", "52900"));
stock.push(new producto ("Placa de Video Zotac GeForce GTX 1660", "6GB GDDR5 Dual Fan", "65000"));

for (const producto of stock)
    producto.descuentos ();
for (let index = 0; index < 4; index++){
    console.log (stock[index]);
}







