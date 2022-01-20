"use strict";

let vardas = document.getElementById("vardas");
let pavarde = document.getElementById("pavarde");
let amzius = document.getElementById("amzius");
let submit = document.getElementById("submit");
let minPirm = document.getElementById("minPirm");
let minPask = document.getElementById("minPask");
let table = document.getElementById("table");

table.innerHTML += `<tr><td>Petras</td><td>Petraitis</td><td>20</td></tr>`;
table.innerHTML += `<tr><td>Jonas</td><td>Jonaitis</td><td>15</td></tr>`;
table.innerHTML += `<tr><td>Agnė</td><td>Agnytė</td><td>35</td></tr>`;


document.querySelector("form").addEventListener("submit", function()
{
    event.preventDefault();
    if(vardas.value == "" || pavarde.value == "" || amzius.value == "" || amzius.value <= 0){
        alert("Įveskite duomenis");
    }
    else {
        table.innerHTML += `<tr><td>${vardas.value}</td><td>${pavarde.value}</td><td>${amzius.value}</td></tr>`;
        vardas.value = "";
        pavarde.value = "";
        amzius.value = "";
    }   
});

   document.getElementById("minPirm").addEventListener("click", function(){
        event.preventDefault();
        let list = document.querySelectorAll("#table tr");
        if(list.length > 0){    
        list[0].remove();
        } else {
            alert("Nebėra ką trinti!");
        }
        
        
    });
    document.getElementById("minPask").addEventListener("click", function(){
        event.preventDefault();
        let list = document.querySelectorAll("#table tr");
        if(list.length > 0) {
        list[list.length - 1].remove();
        } else {
            alert("Nebėra ką trinti!");
        }
        
    });