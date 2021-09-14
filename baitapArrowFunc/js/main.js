const getEle = id => document.getElementById(id);
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

//render color btn
const renderBtn = () => {
    let contentHtmlBtn = "";
    colorList.forEach((color, index) => {
        if(index ===0) {
            contentHtmlBtn += `<button class = "color-button active ${color}" onclick = "setColor(event, '${color}')"></button>`
            
        } else {
            contentHtmlBtn += `<button class = "color-button ${color}" onclick = "setColor(event, '${color}')"></button>`
        }
    })
    getEle("colorContainer").innerHTML = contentHtmlBtn;
}


//hàm chạy ngay khi mới mở web
renderBtn();


//mảng colorButton
const colorBtnArrays = document.querySelectorAll(".color-button");


const setColor = (event, color) => {
    // console.log("hàm setcolor")
    // console.log("btn",event.target)
    // console.log("color", color)


    //?remove hết active của mọi button
    // for(let button of colorBtnArrays) {
    //     button.classList.remove("active");
    // }


    //? cách 2: remove class active của button đang có active thôi
    document.querySelector(".color-button.active").classList.remove("active");



    //thêm class active cho button đc click
    event.target.classList.add("active");


     //chuyển màu ngôi nhà
    getEle("house").className = `house ${color}`;
}