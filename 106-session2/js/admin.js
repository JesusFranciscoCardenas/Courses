function init(){

    console.log("Admin page");
}

window.onload=init;


function register(){
//get values form the inputs
//save them variables
//display the values on the console

var code = $("#code").val();
    var title = $("#title").val();
    var price = $("#price").val();
    var category = $("#category").val();
    var image = $("#image").val();

    console.log("Code "+code);
    console.log("Title "+title);
    console.log("Price "+price);
    console.log("category "+category);
    console.log("image "+image);


}