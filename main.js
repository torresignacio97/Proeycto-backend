addProducts = (title, description, price, thumbnail, code, stock) => {
        
    let newProduct = {};

    newProduct.id = ProductManager.id;
    newProduct.title = title;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.thumbnail = thumbnail;
    newProduct.code = code;
    newProduct.stock = stock;
    ProductManager.id++;

    this.products.forEach(elem => {
        if(elem.code == newProduct.code) {
            console.log( "Error: El código ya existe. Por favor, introduzca un producto válido.");
        }
    })

    this.products.push(newProduct);
    
    console.log( newProduct);
}