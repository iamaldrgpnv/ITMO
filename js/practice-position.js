"use strict"
let container = document.querySelector(".container");
let width = screen.width;
let height = screen.height;
let body = document.querySelector("body");
body.style.zoom = 1;
container.style.width = Math.floor(width * 52.1 / 100) + "px"
container.style.height =  Math.floor(height * 98.6 / 100) + "px"
console.log(container.style.width)

