var port = document.getElementById("voteportrait");
var land = document.getElementById("votelandscape");
var photo = document.getElementById("votephotos");




photo.value = localStorage["myphotos"];
port.value = localStorage["portrait"];
land.value = localStorage["landscape"];


if(photo.value !== 'undefined' && port.value !== 'undefined' && land.value!== 'undefined')
{
    let seen = localStorage["seen"];
  
    if(seen ==='true')
    {
        localStorage["seen"] = 'false';
         localStorage.clear(); 
    }
    else
    {
        localStorage["seen"] = 'true';
    }
}


if(photo.value == "undefined")
{
    photo.value = "vote";
}
if(port.value === "undefined")
{
    port.value = "vote";
}
if(land.value === 'undefined')
{
    land.value = "vote";
}


function submitForm(){
    
    let subject = document.getElementById("subject");
    let email = document.getElementById("email");
  
    alert("Your email has been sent to Zornica!")

}
