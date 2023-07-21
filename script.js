const sectoin_1=document.querySelector(".section-select--buttons")
const sectoin_2=document.querySelector(".section--thank-you")
const butSubmit=document.querySelector("#submit")
const butt=document.querySelectorAll(".butValue")
const spanText=document.querySelector(".spanText")
console.log(butt)

let data;
butt[0].addEventListener("click",()=>{
     data=butt[0].value;
    return data
});
butt[1].addEventListener("click",()=>{
     data=butt[1].value;
    return data
});
butt[2].addEventListener("click",()=>{
     data=butt[2].value;
    return data
});
butt[3].addEventListener("click",()=>{
     data=butt[3].value;
    return data
});
butt[4].addEventListener("click",()=>{
    data=butt[4].value;
    return data
});






butSubmit.addEventListener("click",()=>{
    sectoin_1.style.display="none"
    sectoin_2.style.display="flex"
    spanText.textContent=data;
   
})

