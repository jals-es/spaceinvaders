var you_win = false;
var you_lose = false;
var lose_font = 50;
var final_score_font = 0;
var press_start_font = 50;
var move_press_start_font = 1;
var x_press_start_font = (canvas.width / 2) - 400;
var move_x_press_start_font = 1;
var count_lose = 0;
var color_lose = colorHEX();

function print_lose() {

    if (count_lose == 30) {
        color_lose = colorHEX()

        count_lose = 0;
        press_start_font += move_press_start_font;
    }

    if (count_lose == 5 || count_lose == 10 || count_lose == 15 || count_lose == 20 || count_lose == 25) {
        press_start_font += move_press_start_font;
    }

    x_press_start_font += move_press_start_font * -1;


    ctx.fillStyle = "red";

    ctx.font = lose_font + "px DotsAllForNow";

    ctx.fillText("GAME OVER", (canvas.width / 2) - 650, (canvas.height / 2) - 200);

    if (lose_font < 200) {
        lose_font++;
    }
    ctx.fillStyle = color_lose;

    count_lose++;

    ctx.font = final_score_font + "px DotsAllForNow";

    ctx.fillText("final score: " + score, (canvas.width / 2) - 250, (canvas.height / 2) - 0);

    if (final_score_font < 50) {
        final_score_font += 0.75;
    }

    if (press_start_font >= 60) {
        move_press_start_font = -1;
    } else if (press_start_font <= 40) {
        move_press_start_font = 1;
    }

    ctx.font = press_start_font + "px DotsAllForNow";

    ctx.fillText("Press enter to restart", x_press_start_font, (canvas.height / 2) + 250);

}

function print_win() {
    if (count_lose == 30) {
        color_lose = colorHEX()

        count_lose = 0;
        press_start_font += move_press_start_font;
    }

    if (count_lose == 5 || count_lose == 10 || count_lose == 15 || count_lose == 20 || count_lose == 25) {
        press_start_font += move_press_start_font;
    }

    x_press_start_font += move_press_start_font * -1;



    ctx.fillStyle = color_lose;

    ctx.font = lose_font + "px DotsAllForNow";

    ctx.fillText("you win", (canvas.width / 2) - 500, (canvas.height / 2) - 200);

    if (lose_font < 200) {
        lose_font++;
    }

    count_lose++;

    ctx.font = final_score_font + "px DotsAllForNow";

    ctx.fillText("final score: " + score, (canvas.width / 2) - 250, (canvas.height / 2) - 0);

    if (final_score_font < 50) {
        final_score_font += 0.75;
    }

    if (press_start_font >= 60) {
        move_press_start_font = -1;
    } else if (press_start_font <= 40) {
        move_press_start_font = 1;
    }

    ctx.font = press_start_font + "px DotsAllForNow";

    ctx.fillText("Press enter to restart", x_press_start_font, (canvas.height / 2) + 250);
}

function restart_game() {
    console.log("restart")
    location.reload();
}