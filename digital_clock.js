// const clock=document.querySelector('#clock')
const clock=document.getElementById('clock');

//this method calls the function at specified interval (in millisecond)
//until clearInterval() is called
// setInterval(function(){
// let date=new Date();
// // console.log(date.toLocaleTimeString())
// clock.innerHTML=date.toLocaleTimeString()
// },1000)

setInterval(displaytime,1000);
function displaytime(){
    let date=new Date();
    clock.innerHTML=date.toLocaleString();

}