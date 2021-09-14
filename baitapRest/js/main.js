
const getEle = id => document.getElementById(id);


const tinhDTB = (...marks) => {
    let tongDiem = 0;
    for(let diem of marks) {
        tongDiem += diem;
    }
    return tongDiem/(marks.length);
}


getEle("btnKhoi1").addEventListener("click", () => {
    let toan = getEle("inpToan").value;
    let ly = getEle("inpLy").value;
    let hoa = getEle("inpHoa").value;

    let dtb = tinhDTB(parseFloat(toan), parseFloat(ly),parseFloat(hoa));
    getEle("tbKhoi1").innerHTML = dtb.toFixed(2);
})




getEle("btnKhoi2").addEventListener("click", () => {
    let van = getEle("inpVan").value;
    let su = getEle("inpSu").value;
    let dia = getEle("inpDia").value;
    let anh = getEle("inpEnglish").value;

    let dtb = tinhDTB(parseFloat(van), parseFloat(su),parseFloat(dia), parseFloat(anh));
    getEle("tbKhoi2").innerHTML = dtb.toFixed(2);
})