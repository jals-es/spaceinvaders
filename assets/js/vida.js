vides = []
var image_vida = new Image(canvas)
image_vida.src = 'assets/img/heal.svg';
image_vida.width = 105;
image_vida.height = 20;

function Vida(x, m_y = 1) {
    this.image = image_vida;
    this.x = x;
    this.y = 0;
    this.m_x = start_x_m;
    this.m_y = m_y;
    this.uuid = uuidv4()
}

function print_vida() {
    if (vida > 2) {
        vides = []
    } else {
        if (10 == Math.floor(Math.random() * (100 - 1 + 1) + 1)) {
            vides.push(new Vida(Math.floor(Math.random() * (canvas.width - 0 + 1) + 0)))
        }
    }
    for (let index = 0; index < vides.length; index++) {
        move_vida(vides[index]);

    }
}

function move_vida(vidaactual) {
    if (vidaactual.y < canvas.height) {
        vidaactual.y = vidaactual.y + vidaactual.m_y
        check_vida(vidaactual);
        ctx.drawImage(image_vida, vidaactual.x, vidaactual.y);
    }
    // return shot;
}

function check_vida(vidaactual) {
    if (isBetweenVida(vidaactual)) {
        vida++
        var elementPos = vides.map(function (x) {
            return x.uuid;
        }).indexOf(vidaactual.uuid);
        vides.splice(elementPos, 1)
    }
}

function isBetweenVida(vidaactual) {

    vidaxstart = vidaactual.x
    vidaxfinal = vidaactual.x + vidaactual.image.width

    vidaystart = vidaactual.y
    vidayfinal = vidaactual.y + vidaactual.image.height

    navexstart = n_x
    navexfinal = n_x + image_nave.width

    vidaystart = vidaactual.y
    vidayfinal = vidaactual.y + vidaactual.image.height
    // console.log(navexstart + " " + vidaxstart + " " + navexfinal);
    if ((navexstart < vidaxstart && vidaxstart < navexfinal) || (navexstart < vidaxfinal && vidaxfinal < navexfinal)) {
        console.log("Nx: " + navexstart + " Ny: " + n_y + " Vxs: " + vidaxstart + " Vxf: " + vidaxfinal);
        if (n_y < vidayfinal) {
            return true
        }
    }
    return false
}