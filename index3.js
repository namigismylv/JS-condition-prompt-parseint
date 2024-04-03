let ceki=parseFloat(prompt("çəki"));
let boy=parseFloat(prompt("boy"));

let bim= ceki/(boy*boy);
if(bim>25){
    console.log("Artiq çəkili",bim)
}
else if(bim>=18.6 && bim<=24.9){
    console.log("Normal",bim)
}
else {
    console.log("Ariq",bim)
}


