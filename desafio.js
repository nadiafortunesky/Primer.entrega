class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct (title, description) {
        let newId;
        if (this.products.length==0){
          newId=1 
        } else {
            newId= this.products[this.products.length-1].id+1
        }
        
        if (!title || !description){
            return console.log("Todos los campos son obligatorios")
        } 
        
        const newProduct = {
            id: newId,
            title,
            description,
        }
        this.products.push(newProduct);
        console.log("Agregado exitosamente")
    }
    getProduct () {
        console.log(this.products);
    }
    getProductById (idProduct) {
        const product = this.products.find(elm => elm.id === idProduct);
        if (!product){
            console.log("Not found")
        }
    }
}


const manager = new ProductManager();
manager.addProduct(undefined, "color negro, talle S");
manager.addProduct("Top deportivo", undefined);
manager.addProduct("Calza deportiva", "Color negro, talle M");
manager.getProduct();
manager.getProductById(1);
manager.getProductById(2);
