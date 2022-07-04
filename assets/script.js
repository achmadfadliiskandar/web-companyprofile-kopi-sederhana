// alert("assalamualaikum")
// menentukan tahun di footer
let tahun = new Date();
let tahunsekarang = tahun.getFullYear();
document.getElementById('tahun').innerHTML = tahunsekarang

// menentukan tanggal lahir saya
const yearnow = new Date();
const years = yearnow.getFullYear()
const mybirtday = 2003
document.getElementById('lahir').innerHTML = years-mybirtday
// console.log(years-mybirtday)

// membuat back to top 
var mybutton = document.getElementById('myBtn');
window.onscroll = function(){scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}