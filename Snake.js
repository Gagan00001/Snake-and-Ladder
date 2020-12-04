var current_Positon=0;
function Random_dice(min=1,max=6)
{   
    var a=Math.floor(Math.random() * (max - min) + min);
    if(current_Positon>=100){
        alert("You Have Won the Game");
        coffin();
    }
    else{
        document.getElementById("img-id").src = "d"+a+".png";
        document.getElementById("img-id").style= "width:75px;height:75px; margin-top:100px; margin-left:60px;"
        current_Positon+=a;
        dot_handler(); 
        Adjust_Dice();  
    }
}
function Adjust_Dice()
{
    console.log(current_Positon);
    switch(current_Positon){
        case 99:
            current_Positon=80;
            coffin();
            break;
        case 95:
            current_Positon=75;
            break;
        case 92:
            current_Positon=88;
            break;
        case 89:
            current_Positon=68;
            break;
        case 78:
            current_Positon=98;
            break;
        case 74:
            current_Positon=53;
            break;
        case 71:
            current_Positon=91;
            break;
        case 62:
            current_Positon= 19;
            break;
        case 64:
            current_Positon=60;
            break;
        case 51:
            current_Positon=67;
            break;
        case 49:
            current_Positon=11;
            break;
        case 46:
            current_Positon=25;
            break;
        case 36:
            current_Positon=44;
            break;
        case 21:
            current_Positon=42;
            break;
        case 28:
            current_Positon=85;
            break;
        case 15:
            current_Positon=26;
            break;
        case 16:
            current_Positon=6;
            break;
        case 2:
            current_Positon=38;
            break;
        case 7:
            current_Positon=14;
            break;
        case 8:
            current_Positon=31;
            break; 
    }
    console.log(current_Positon);
        // return current_Positon;       
}

// function coffin()
// {
//    var x = document.getElementById("myAudio");
//    x.play();
// }
var i =0
function dot_handler(){
    
    i+=current_Positon;
    var x = document.createElement("IMG");
    x.setAttribute("src", "red-dot.jpeg");
    x.setAttribute("margin-left","0px");
    x.setAttribute("width", "10px");
    x.setAttribute("height", "10px");
    x.setAttribute("alt", "Dot-Image");
    document.getElementById("box"+current_Positon).style.backgroundImage= "url('red-dot.jpeg')";
    setTimeout(()=>{
        document.getElementById("box"+(i-current_Positon)).style.backgroundImage= 'none';
        console.log("fgtred",(i-current_Positon));

    },3000)
   
 
}