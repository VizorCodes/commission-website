let clicked = false;

$(document).ready(function (){
    $("#refsheet").ezPlus();
})

$(document).ready(function (){
    // $("#commissionimg").hover(
    //     function(){$(this).animate({width: "400px", height:"400px"}, 1000);},      
    //     function(){$(this).animate({width: "500px"}, 1000);}  
    //     function(){$(this).animate({width: "500px"}, 1000);}
    // );

    $("#commissionimg").click(function(){
        if (!clicked) {
            $(this).animate({width: "600px", height:"auto"}, 200);     
            clicked = true; 
        } else {
            $(this).animate({width: "400px", height:"auto"}, 200);      
            clicked = false;
        }
    })
})