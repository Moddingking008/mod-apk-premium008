const params = new URLSearchParams(window.location.search);
const appName = params.get("app");

fetch("data/apps.json")
.then(res => res.json())
.then(apps => {

const app = apps.find(a => a.name === appName);

if(!app){
document.body.innerHTML="<h1>App Not Found</h1>";
return;
}

document.getElementById("appIcon").src = app.logo;
document.getElementById("appName").textContent = app.name;
document.getElementById("appVersion").textContent = "Version : " + app.version;
document.getElementById("appSize").textContent = "Size : " + app.size;
document.getElementById("downloadBtn").href = app.download;

});
