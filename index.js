let checkid=document.getElementById("text")
console.log(checkid.innerHTML)


//  tag
let tag=document.getElementsByTagName("h1")
console.log(tag)


//class
let getclass=document.getElementsByClassName("box")
console.log(getclass)


//  DOM function
let heading=document.querySelector(".heading")
    heading.innerHTML="Hello World"


  // button function
  
  let btn=document.getElementById("btn")
  let flex=document.querySelector(".flex")
  console.log(flex)
  btn.addEventListener("click",function(){
    document.querySelector(".flex").style.flexDirection="column"
  })

  //seven que
  let changecolor=document.getElementsByTagName("h1")[2];
  changecolor.setAttribute("id","heading")
  changecolor.style.color="red"
  console.log(changecolor)



  //8que
  let reeplace=document.getElementById("retext")
  let but=document.getElementById("but")
  but.addEventListener("click",function(){
    reeplace.innerHTML="Welcome to Elevation academy"
  })




 // que 10

  

 let print=document.getElementById("print");
 print.addEventListener("click",function(){
  let display =  year.options[year.selectedIndex].text;             
        alert(display)
 })














  //que 9

  function clock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
      
    if(hours>12){
      hours=hours-12
    }


    document.getElementById("hours").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;
  }
  setInterval(clock,1000);

