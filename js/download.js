const params = new URLSearchParams(window.location.search);

const link = params.get("link");

let sec = 5;

const timer = setInterval(() => {

sec--;

document.getElementById("count").textContent = sec;

if(sec <= 0){

clearInterval(timer);

const btn = document.getElementById("downloadLink");

btn.style.display = "inline-block";

btn.href = decodeURIComponent(link);

}

},1000);
