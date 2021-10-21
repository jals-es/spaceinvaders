/** SPACE INVADERS **/
const canvas = document.getElementById("principal");
const ctx = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;

function printAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print_monsters();
    print_nave();
}

setInterval(printAll, 10);