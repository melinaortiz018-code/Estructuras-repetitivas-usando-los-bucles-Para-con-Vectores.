function procesarInventario() {
    const productos = ["Arroz", "Azúcar", "Leche", "Pan", "Aceite", "Huevos"];
    const precios = [];
    let total = 0;
    
    const lista = document.getElementById("lista");
    const totalElemento = document.getElementById("total");
    
    lista.innerHTML = "";
    
    for (let i = 0; i < productos.length; i++) {
        let valorTexto = document.getElementById("p" + i).value;
        
        if (valorTexto === "") {
            precios[i] = 0;
        } else {
            precios[i] = parseFloat(valorTexto);
        }
    }
    
    for (let i = 0; i < productos.length; i++) {
        total = total + precios[i];
        lista.innerHTML = lista.innerHTML + "<li>" + productos[i] + ": $" + precios[i].toFixed(2) + "</li>";
    }
    totalElemento.innerHTML = "<strong>Total Inventario: $" + total.toFixed(2) + "</strong>";
}