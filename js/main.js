const apps = [
{
name:"Netflix Premium",
image:"https://picsum.photos/300/300?1",
version:"v9.12.0",
link:"#"
},
{
name:"Spotify Premium",
image:"https://picsum.photos/300/300?2",
version:"v9.0.58",
link:"#"
},
{
name:"YouTube Premium",
image:"https://picsum.photos/300/300?3",
version:"v20.25",
link:"#"
},
{
name:"Alight Motion",
image:"https://picsum.photos/300/300?4",
version:"v5.0.0",
link:"#"
},
{
name:"CapCut Pro",
image:"https://picsum.photos/300/300?5",
version:"v15.8",
link:"#"
},
{
name:"Kuku TV Premium",
image:"https://picsum.photos/300/300?6",
version:"Latest",
link:"#"
}
];

const container=document.getElementById("apps");

function loadApps(list){
container.innerHTML="";

list.forEach(app=>{
container.innerHTML+=`
<div class="card">
<img src="${app.image}">
<div class="card-content">
<h3>${app.name}</h3>
<p>${app.version}</p>
<a href="app.html?app=${encodeURIComponent(app.name)}" class="btn">
View Details
</a>
</div>
</div>
`;
});
}

loadApps(apps);

document.getElementById("search").addEventListener("input",function(){

const value=this.value.toLowerCase();

const result=apps.filter(app=>
app.name.toLowerCase().includes(value)
);

loadApps(result);

});
