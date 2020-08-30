
var catalog=[];
function fetchData(){
    //get data from the server
    //use object literal
catalog=[
    {
        code:'001',
        title:'Iphone',
        price:1000.00,
        category:'Phone',
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
    },
    {
        code:'002',
        title:'Iphone X',
        price:1200.00,
        category:'Phone',
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
    },

    {
        code:'003',
        title:'Samsung TV',
        price:1000.00,
        category:'Electronics',
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
    },
    {
        code:'004',
        title:'Computer',
        price:1500.00,
        category:'Laptop',
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
    }


];
displayCatalog();


}


function displayCatalog(){
    //travel the array of items with a for loop
    //get each item
    //display the item on the html
for(var i=0; i<catalog.length;i++){
    var item = catalog[i];
    var syntax=`
   <div class="item" id="${item.code}">
   <img src="${item.img}">
   <h4> ${item.title} </h4>
   <h6 class="itemPrice">$ ${item.price} </h6>
   <p> ${item.category} </p>
   <button class="btn btn-primary"> Add to cart</button>
   </div>
    `;

    $("#catalog").append(syntax);
}



}



function init(){

    console.log("catalog page");
    //hook events
    fetchData();
}

window.onload=init;
