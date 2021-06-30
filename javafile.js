

// var text="hello"; 
// alert(text);
// let texte2=document.getElementById()
// text.getElementById("rachid")

//  var rachid=["hamidarrahmane","40","fonctionnaire"];
//  var i=0;
// for(i=0;i<rachid.length;i++){

//     document.getElementById("rachid").innerHTML+=rachid[i]+"<br>";
// }
// do{
//     document.getElementById("rachid").innerHTML+=rachid[i]+"<br>";
//     i++
// }
// while(i<2);

// var myobject={user1:{name:"rachid",ffontion:"emloyed"},
//               user2:{name:"ali",ffontion:"emloyed"},
//               user3:{name:"khalid",ffontion:"emloyed"}
//             };
// // for(var item in myobject){
    
// // } 
// var tbody=document.getElementById("tbody");
// Object.keys(myobject).forEach(element => {
//     tbody.innerHTML+=
//     "<tr>"
//     +"<td>" +myobject[element].name+"</td>" 
//     +"<td>" +myobject[element].ffontion+"</td>"
//     +"</tr>";
// });
// var img=document.getElementById("img");
// img.style.backgroundImage="linear-gradient(to left ,#4A69FF,#00CF91)";
// img.style.position="absolute";
// img.style.width="100px";
// img.style.height="100px";
// img.style.top="50%";
// img.style.right="50%";
// var img=document.getElementById("head");
// img.style.backgroundColor="red";
// img.style.position="absolute";
// img.style.width="100px";
// img.style.height="100px";
// img.style.top="50%";
// img.style.right="50%";
// var byclasses=document.getElementsByClassName("rachid");
//      byclasses.innerHTML="JAvascript";
// for(var i=0;i<=byclasses.length;i++){
//     byclasses[i].innerHTML+="rachid"+i;
//     byclasses[i].style.background="red";
//     byclasses[i].style.color="green";
//     byclasses[i].style.font="green";

// }
// var bytag=document.getElementsByTagName("h1");

// for(var i=0;i<=bytag.length;i++){
//     bytag[i].innerHTML+="rachid"+i;
//     bytag[i].style.background="red";
//     bytag[i].style.color="green";
// }
// function rachid(a,b){

//    var x=a*b;
//     return alert(x);
// // }
// class App{
//  constructor(){
//   var text2=this.new_method();
//   document.getElementById("title").innerHTML=this.new_method();

//     //  this.new_method();
//      //contructor
//  }
 
//        new_method(){
//               return "hi rachid"
//        }
//         //  rachid(){
//         //       var rach=   document.getElementById("body").style.background="red";
//                     //    }

// }
// onload=new App();
// //  var rachid=new App();//====>class Object
// //  rachid.rachid();
// onload=()=>{
//     alert("rachid");
// }
// onload=function(){
//     alert("ali");
// }
// onload= function rachid(){
//     alert("ali");
// }
//  var btnevent=document.getElementById("btn");
   
//      btnevent.onclick=()=>{  
//          btnevent.style.backgroundColor=`green`;
//          alert("hello btn event");
   
//  }

// document.getElementById("btn").addEventListener("click",()=>{

//     alert("hellooooo");
// });
// document.getElementById("btn").addEventListener("click",function(){

//     alert("hellooooo");
// });
// localStorage.setItem("rachid","deutsh")
// function removeItem(){
//     //localStorage.removeItem("rachid");
// // }
// if(localStorage.getItem("rachid")==null){
//     var setYourName=prompt("Write your Name");
//     localStorage.setItem("rachid",setYourName)
// }
// document.getElementById("rachid").innerHTML="hello"+"  "+localStorage.getItem("rachid");

// function removeItem(){
//     localStorage.removeItem("rachid");
// }
// var r="abcd";
// // var b=r.substring(3);
// // alert(b);
// // function onkeyUp(keyup){
// // alert(keyup.key);
// // }
// let emeil_form=document.getElementById("email_form");
// emeil_form.addEventListener("submit",(d)=>{
//     var email=document.getElementById("email");
//     var errors_form=document.getElementById("error_form");
//     if(email.value.indexOf("@gmail")!=-1){
        
//         errors_form.innerHTML="your email is'nt a gmail adresse";
//         return true
//     }
//     else if(email.value===""){
//         d.preventDefault();
//         email.style.borderColor="red";
//         errors_form.style.color="red";
//         errors_form.innerHTML="your email field is empty";
//         // alert("write your email")
//     }else{  
//          d.preventDefault();
//          email.style.borderColor="red";
//          errors_form.style.color="red";
//          errors_form.innerHTML="your email is'nt a gmail adresse";
     
        
      
//         // alert("email errors")
//     }
    
    
// });
// var email=document.getElementById("email");

// email.addEventListener("invalid",()=>{
// if(email.validity.valueMissing){
//     email.setCustomValidity("helllo")
// }else if(email.validity.typeMismatch){
//     email.setCustomValidity("mismatch")
// }else{
//    return true; 
// }

// });
// var email=document.getElementById("email");

// email.addEventListener("input",()=>{
// if(email.validity.valueMissing){
//     email.setCustomValidity("no value")
// }else if(email.validity.typeMismatch){
//     email.setCustomValidity("mismatch")
// }else{
//    return true; 
// }

// });
// document.getElementById("select").addEventListener("change", ()=>{

//     document.body.style.background=document.getElementById('select').value;
// });
//     var result=document.getElementById("result");
//     var text=document.getElementById("text");
//     var select=document.getElementById("select");
// document.getElementById("text").addEventListener("input", ()=>{
//     codage_decodage();
// })
// function codage_decodage(){
//     if(select.value=="encode"){
//         result.value=btoa(text.value);
//     }else{
//         result.value=atob(text.value);
//     }
// }
// var date=new Date;
// function time(){
   
//     document.getElementById("time").innerHTML="<h1>"+date.getMilliseconds()+"</h1>";
// }
// setInterval(time,1200);

// class Slider{
//      constructor(){
//     this.images=[];
//     this.images[0]="image/0.jpg";
//     this.images[1]="image/1.jpg";
//     this.images[2]="image/2.jpg";
//     this.images[3]="image/3.jpg";
//     this.counter=0;
//     document.images_name.src=this.images[0];
//         setInterval(()=>{
//       this.playslider();
//     },4000);
// }

// playslider(){
  
//     if(this.counter<this.images.length-1){
//         this.counter++;
//     }
//     else{
//         this.counter=0;
//     }
//         document.images_name.src=this.images[this.counter];
//         document.getElementById("counter").innerHTML=this.counter;
// }
// }
// onload=new Slider;



function timer(){
    var date= new Date;
    document.getElementById("settime").innerHTML=date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
    document.getElementById("setdate").innerHTML=date.getDate()+" / "+parseInt(date.getMonth()+1)+" / "+date.getFullYear();
}
 setInterval(timer,1000);
 onload=timer();

 function getcolor(){
     var color=document.getElementById("setcolor").value;
     localStorage.setItem("setcolor",color);
     document.getElementById("time").style.background=localStorage.getItem("setcolor");
     document.body.style.background=localStorage.getItem("setcolor");
 }

 function setcolor(){
    document.getElementById("setcolor").value=localStorage.getItem("setcolor");
    document.getElementById("time").style.background=localStorage.getItem("setcolor");
    document.body.style.background=localStorage.getItem("setcolor");
 }
 setTimeout(() => {
    setcolor()
 }, 1000);
 
// function add(){
// var list=document.createElement("li");
// var input= document.getElementById("input").value;
// var text=document.createTextNode(input);
// list.appendChild(text);
//     document.getElementById("mylist").appendChild(list);
// }