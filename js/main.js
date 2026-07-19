const container = document.getElementById("apps");

fetch("data/apps.json")
.then(response => response.json())
.then(apps => {

showApps(apps);

document.getElementById("search").addEventListener("input", function () {

const value = this.value.toLowerCase();

const filtered = apps.filter(app =>
app.name.toLowerCase().includes(value)
);

showApps(filtered);

});

});

function showApps(apps){

container.innerHTML = "";

apps.forEach(app=>{

container.innerHTML += `

<div class="card">

<img src="${app.logo}" alt="${app.name}">

<div class="card-content">

<h3>${app.name}</h3>

<p>Version : ${app.version}</p>

<p>Size : ${app.size}</p>

<p>⭐ ${app.rating}</p>

<a href="app.html?app=${encodeURIComponent(app.name)}" class="btn">

View Details

</a>

</div>

</div>

`;

});

             }
