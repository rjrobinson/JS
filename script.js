function reqListener() {
    console.log(this.responseText);
}

var xhr = new XMLHttpRequest();
xhr.onload = reqListener

xhr.open("GET", "localhost:4567/txtfile.txt", true)

xhr.onreadystatechange = function() {
    if (xhr.readystate === 4) {
        alert(xhr.status)
        alert(xhr.responseText);
    }
};


xhr.send(null);

// alert(xhr.responseText);
