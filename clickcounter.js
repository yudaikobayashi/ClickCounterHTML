var counter = document.getElementById("counter"),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    count = 0;

minus.onclick = function() {
    count -= 1;
    counter.innerHTML = count;
};

plus.onclick = function() {
    count += 1;
    counter.innerHTML = count;
};
