var nameProduct = document.getElementById("nameProduct");
var priceProduct = document.getElementById("priceProduct");
var categoryProduct = document.getElementById("categoryProduct");
var descriptionProduct = document.getElementById("descriptionProduct");
var btn = document.getElementById("btn");
var prds = document.getElementsByClassName("inputs");


var products = [];
 var savedProducts = localStorage.getItem('products');
    if (savedProducts)
    {
        products = JSON.parse(savedProducts);
        Display();
    }
function display() {
    var product =
    {
        name: nameProduct.value,
        price: priceProduct.value,
        category: categoryProduct.value,
        description: descriptionProduct.value
    }
    products.push(product); 
   
    localStorage.setItem('products', JSON.stringify(products))

    Display()

    for (var x = 0; x < prds.length; x++) {
        prds[x].value = ''
    }
    // console.log("scscqac")
}
function Display() {
    var tbs = ''
    for (var i = 0; i < products.length; i++) {
        tbs += `<tr>
            <td>"${i + 1}"</td>
            <td>"${products[i].name}"</td>
            <td>"${products[i].price}"</td>
            <td>"${products[i].category}"</td>
            <td>"${products[i].description}"</td>
            <td><button onclick="deleteProduct(${i})" id="btn2"class="btn2">Delete</button></td>
            <td><button id="btn3"class="btn3">Update</button></td>
        </tr>`
    }
    var table = document.getElementById("table").innerHTML = tbs;
}
function deleteProduct(index) {
    products.splice(index, 1)
    // console.log(index)
    Display()

}
console.log(products)



