let count = 0;

function Counter() {
    count++
    document.getElementById("counter").textContent = count
}
function ResetCounter() {
    count = 0
    document.getElementById("counter").textContent = count
}