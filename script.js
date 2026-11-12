function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    document.getElementById("result").innerHTML +=
        name + " - " + roll + "<br>";
}