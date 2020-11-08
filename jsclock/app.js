const hourHand= document.querySelector(".hour-hand");
const minuteHand= document.querySelector(".minute-hand");
const secHand= document.querySelector(".sec-hand");

function setDate(){
const now = new Date();

const second =now.getSeconds();
const secondDegrees = ((second/ 60)* 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const minute= now.getMinutes();
const minuteDegrees= ((minute/60) *360)+ ((second/60)*6) + 90;
minuteHand.style.transform =`rotate(${minuteDegrees}deg)`;

const hour= now.getHours();
const hourDegrees= ((hour/12) *360)+  ((minute/60)*30) + 90;
hourHand.style.transform =`rotate(${hourDegrees}deg)`;

}
setInterval(setDate,1000);
setDate();
