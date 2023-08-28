var i=0;
function dynamicallyDisplayText(text){
    $(".top").animate({width: 250}, 50).css("left","41%");
    var div=document.createElement("div");
    div.appendChild(document.createTextNode(text));
    $(".top").append(div)
    $(".top").innerText=text;
    setTimeout(function(){
        $(".top").width(100);
        $(".top").css("left","46%");
        $(".top").empty();
    },2000)
}

async function removeTodoas(){
    $(".top").animate({width: 320}, 80).css("left","39%");
    var div=document.createElement("div");
    div.appendChild(document.createTextNode("Removing...."));
    $(".top").append(div)
    var btns=document.createElement("div");
    btns.setAttribute("margin-right","10px")
    var tru=document.createElement("button")
    tru.setAttribute("class","cnf yes");
    var fal=document.createElement("button")
    fal.setAttribute("class", "cnf no")
    btns.appendChild(tru)
    btns.appendChild(fal)
    console.log(btns)
    $(".top").append(btns)
    var check=false;
    setTimeout(function(){
        $(".top").width(100);
        $(".top").css("left","46%");
        $(".top").empty();        
    },800);
    return check;
}
async function removeTodo(){
    await removeTodoas();
}
$(document).ready(function(){
    // alert("click on the To-do List App Icon to go into the todo list")
    $(".toggle").click(function(){
        i++;
        if(i%2!=0){
            $("ul").css("flex-direction","column-reverse")
        }else{
            $("ul").css("flex-direction","column")
        }
    })
    $(".clear").click(function(){
        // if(document.getElementById("wow").innerHTML=''){
        //     $(".top").animate({width: 250}, 50).css("left","41%");
        //     var div=document.createElement("div");
        //     div.appendChild(document.createTextNode("No To-do"));
        //     $(".top").append(div)
        //     setTimeout(function(){
        //         $(".top").width(100);
        //         $(".top").css("left","46%");
        //         $(".top").empty();
        //     },1000)
        //     return ;
        // }
        $(".top").animate({width: 250}, 50).css("left","41%");
        var div=document.createElement("div");
        div.appendChild(document.createTextNode("Clearing..."));
        $(".top").append(div)
        setTimeout(function(){
            $(".top").width(100);
            $(".top").css("left","46%");
            $(".top").empty();
            $("#wow").empty();
        },1000)
        // $("#wow").empty();
    })
    $("#todolist").click(function(){
        $(".bottom").addClass("white");
        var img="./Fabric_BM_Moon_Dance_Strapless_Black_6e79d9be-c941-4ff1-b611-a27615da84ad_600x600.jpg"
        $(".smartphone").css({"background-image": "url(" + img + ")"});  
        $(".bottom").slideUp();
        $(this).hide();
        $(".screen").fadeIn();
    });
    
    $(document).on('click','.dlt',function(){
        console.log("wow")
       if(removeTodo()){
        $(this).parent().parent().parent().fadeOut()
       }else{
        console.log("no issues")
       }
    })
    $("#AddTodo").click(function(){
        var li=document.createElement("li");
        var div=document.createElement("div");
        div.setAttribute("class", "lstdiv")
        var btns=document.createElement("div");
        btns.setAttribute("class", "opbtns")
        btns.innerHTML='<button class="dlt" id="dltit"></button><button class="up" ></button><button class="down"></button>';
        var valu=$("#input").val();
        if(valu.length<=1){
            dynamicallyDisplayText("Type something")
            return;

        }
        var divcont=document.createElement("div");
        divcont.setAttribute("class","content");
        console.log(divcont);
        divcont.innerHTML=valu;
        div.appendChild(btns);
        div.appendChild(divcont);
        li.appendChild(div);
        $("#wow").append(li);
        var upLink = document.querySelectorAll(".up");

        for (var i = 0; i < upLink.length; i++) {
            upLink[i].addEventListener('click', function () {
                var wrapper = this.parentElement.parentElement.parentElement;
                
                console.log(wrapper);
                if (wrapper.previousElementSibling)
                    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
            });
        }
    
        var downLink = document.querySelectorAll(".down");
    
        for (var i = 0; i < downLink.length; i++) {
            downLink[i].addEventListener('click', function () {
                var wrapper =this.parentElement.parentElement.parentElement;
    
                if (wrapper.nextElementSibling)
                    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
            });
        }
    })
    
    
  });
