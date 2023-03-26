 var foodlist=[{
        qty:1,
        photo:"pic0.jpeg",
        ratings:"3.9/4",
        name:"Burger",
        price:"100",
    },
    {
        qty:1,
        photo:"pic1.jpeg",
        ratings:"3.3/4",
        name:"Pizza",
        price:"300",

    },
    {
        qty:1,
        photo:"pic2.jpeg",
        ratings:"2.9/4",
        name:"Hakka noodles",
        price:"150",

    },
    {
        qty:1,
        photo:"pic3.jpeg",
        ratings:"3.9/4",
        name:"Tandoori Chicken",
        price:"350",

    },
    {
        qty:1,
        photo:"pic4.jpeg",
        ratings:"3.0/4",
        name:"Chicken Biriyani",
        price:"450",

    },
    {
        qty:1,
        photo:"pic5.jpeg",
        ratings:"3.7/4",
        name:"Mutton Biriyani",
        price:"480",

    }]


function display(){

    var temp="";
    
    for(i=0; i<foodlist.length; i++) {
        temp += '<div class="course">';
        temp +=`<img src=${foodlist[i].photo}>`;
        temp += '<p>'+ foodlist[i].ratings +'<i class="fa fa-star" aria-hidden="true">'+'</i>'+'<i class="fa fa-star" aria-hidden="true">'+'</i>'+'<i class="fa fa-star-half-o" aria-hidden="true">'+'</i>'+'</p>';
        temp += '<hr>';
        temp += '<h5>'+ foodlist[i].name +'</h5>';
        temp += '<h6>'+ foodlist[i].price +' '+'Rs'+'</h6>';
        temp += '<button class="btn btn-primary btn-sm" type="submit">'+'<i class="fa fa-minus" aria-hidden="true" onclick="subIt('+i+')">'+'</i>'+'<b>'+'Add'+'</b>'+'<i class="fa fa-plus" aria-hidden="true" onclick="add('+i+')">'+'</i>'+'</button>'
        temp += '</div>';
    }
    document.getElementById('food').innerHTML = temp;          
}
var addi=0;

var sub,subi=0;
function subIt(qn){    
    sub = foodlist[qn].price;
    total -= parseInt(sub);
    console.log(total);
}
var b,a,total=0;

function add(index){
    let name="";
    
    name += '<div class="fd">'+'<span class="left">'+'<b>'+foodlist[index].name +'</span>'+'<span class="right">'+foodlist[index].price +'</span>'+
    '</div>';

    document.getElementById('showlist').innerHTML += name;
   
    let sum = foodlist[index].price;
    total += parseInt(sum);
    document.getElementById('foods').innerHTML = '<b>'+'Total Amount'+'  '+'<span id="amt">'+ total+'</b>'+'</span>';
    console.log(total);
}


function showcart(){ 
    document.getElementById('showlist').style.visibility="Visible";
    document.getElementById('overlay').style.visibility="Visible";
}
function closecart(){
    document.getElementById('showlist').style.visibility="hidden";
    document.getElementById('overlay').style.visibility="hidden";
}