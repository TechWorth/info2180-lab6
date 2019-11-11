var btn = document.getElementById("search");
var http = new XMLHttpRequest();
var lst = "";

http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
        lst = http.response;

    }
};

http.open("GET", "superheroes.php", true);
http.send();


btn.onclick = function() {
    alert(lst);
}