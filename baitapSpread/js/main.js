console.log("do bt")

const text = document.querySelector(".heading").innerHTML;
const letterArray = [...text];

const createSpan = () =>{
    contentHtmlSpan = "";
    for(let letter of letterArray) {
        contentHtmlSpan += `<span>${letter}</span>`
    }
 
    document.querySelector(".heading").innerHTML = contentHtmlSpan;
}

createSpan();