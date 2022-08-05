var height = 0;
var price = 0;
var sort = 0;

function h(v){
    height = v;
    $(".h").css("color", "white");
    $(".h").css("background-color", "rgb(108, 117, 125)");
    if(height==1){
        $("#h1").css("color", "black");
        $("#h1").css("background-color", "skyblue");
    }else if(height==2){
        $("#h2").css("color", "black");
        $("#h2").css("background-color", "skyblue");
    }else if(height==3){
        $("#h3").css("color", "black");
        $("#h3").css("background-color", "skyblue");
    }else if(height==4){
        $("#h4").css("color", "black");
        $("#h4").css("background-color", "skyblue");
    }
}

function p(v){
    price = v;
    $(".p").css("color", "white");
    $(".p").css("background-color", "rgb(108, 117, 125)");
    if(price==1){
        $("#p1").css("color", "black");
        $("#p1").css("background-color", "skyblue");
    }else if(price==2){
        $("#p2").css("color", "black");
        $("#p2").css("background-color", "skyblue");
    }else if(price==3){
        $("#p3").css("color", "black");
        $("#p3").css("background-color", "skyblue");
    }else if(price==4){
        $("#p4").css("color", "black");
        $("#p4").css("background-color", "skyblue");
    }
}

function s(v){
    sort = v;
    $(".s").css("color", "white");
    $(".s").css("background-color", "rgb(108, 117, 125)");
    if(sort==1){
        $("#s1").css("color", "black");
        $("#s1").css("background-color", "skyblue");
    }else if(sort==2){
        $("#s2").css("color", "black");
        $("#s2").css("background-color", "skyblue");
    }else if(sort==3){
        $("#s3").css("color", "black");
        $("#s3").css("background-color", "skyblue");
    }
}

function save(){
    $(".item").hide();
    sorting(height,price);
} 

function sorting(height,price){
    if(height==0 && price==0 && sort==0){
        console.log(height,price,sort);
        $(".item").show();
    }
    else{
        if(height==0){$(".item").show();}
        else if(height==1){$(".h1").show();}
        else if(height==2){$(".h2").show();}
        else if(height==3){$(".h3").show();}
        else if(height==4){$(".h4").show();}
        if(price==0){$(".item").show();}
        else if(price==1){$(".s1").show();}
        else if(price==2){$(".s2").show();}
        else if(price==3){$(".s3").show();}
        else if(price==4){$(".s4").show();}
    }

}