function vowelRemover(){
    var str = document.getElementById("ipstr").value;
    document.getElementById("vrRes").innerHTML = str.replace(/[aeiouAEIOU]/g, '');
}

function Addition(){
    var fnum = document.getElementById("fnum").value;
    var snum = document.getElementById("snum").value;
    alert(Number(fnum)+Number(snum));
}

