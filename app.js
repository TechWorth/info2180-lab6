window.onload = function() {
    var btn = document.getElementById("search-btn");
    var result = document.getElementById("result");
    var input = '';
    var lst = "";
    $.get("superheroes.php", function(data) {
        console.log(data);
        lst = data;

    });

    function getValue() {
        input = document.getElementById('search-bar');
        var result = document.getElementById('result').value;

    }
    //lst.getElementsByTagName('li');
    btn.onclick = function() {
        input.innerHTML = result;

    }


};