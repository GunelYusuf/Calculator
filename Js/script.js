// console.log(document);

// let text=document.getElementById("text");
// text.innerText="Hi Gunel";
// text.innerHTML="<strong>Elchin</strong>"

// console.log(text.length);

// let text=document.getElementsByTagName("p");
// console.log(text[0]);   //p'lerden birincisini getirer

// let text= document.querySelectorAll(".text");

// let text=document.querySelector(".text");
// console.log(text);

// function lorem() {
//     alert("ok redd ol");
// }


// btn.onclick=function lorem(params) {
//     alert("ok redd ol");
// }

// btn.addEventListener("click",function() {
//     alert(" redd ol!!!!!");
// });

// let btn=document.getElementById("btn");
// let text=document.querySelectorAll(".text");

// btn.addEventListener("click", function() {
//    text.style.color="violet";
// })

let btnAdd=document.getElementById("btnAdd");
let input=document.getElementById("input");
let list=document.getElementById("list");
let btnClear=document.getElementById("btnClear");

btnAdd.addEventListener("click",function() {
    let value=input.value.trim();
    if(value==""){
        alert("Fill in the blanks if you don't mind");
        return;
    }
    let li=document.createElement("li");
    li.onclick=function () {
        this.remove();
    }
    // li.className=("list-item-group");
    li.classList.add("list-group-item");
    li.classList.add("itemHover")
    li.innerText=value;
    list.appendChild(li);
    input.value="";
    
});

btnClear.addEventListener("click",function () {
   list.innerHTML="";
//    list.lastChild.remove();
// let allLi=list.children;
})



