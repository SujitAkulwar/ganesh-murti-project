var height = 0;
var price = 0;
var sort = 0;

function h(v){
    height = v;
    $(".btn").css("color", "white");
    $(".btn").css("background-color", "rgb(108, 117, 125)");
    if(height==1){
        $(".1").css("color", "red");
        $(".1").css("background-color", "skyblue");
    }
}

function p(v){
    price = v;
}

function s(v){
    sort = v;
}

function save(){
    console.log(height,price,sort);
    $(".item").hide();
    sorting(height,price);
} 