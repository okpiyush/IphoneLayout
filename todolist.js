let wow=0

$("document").ready(function() {
    $("#todolist1").click(function(){
        $(".bottom").addClass("white");
        var img="./Fabric_BM_Moon_Dance_Strapless_Black_6e79d9be-c941-4ff1-b611-a27615da84ad_600x600.jpg"
        $(".smartphone").css({"background-image": "url(" + img + ")"});  
        $(".bottom").slideUp();
        $(this).hide();
        $("#counter").fadeIn();
    });
    $("#increment").click(function(){
        wow+=1;
        $("#thiscount").text(wow);
    });
    $("#decrement").click(function(){
        if(wow==0){
            return;
        }
        wow-=1;
        
        $("#thiscount").text(wow);
        console.log(wow);
    });
    $("#reset").click(function(){
        wow=0;
        $("#thiscount").text(wow);
        console.log(wow);
    });
})