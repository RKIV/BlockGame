export default class Ball {
    constructor(game) {
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.imgBall = document.getElementById("img_ball");
        this.speed = {
            x: .5,
            y: .5
        };
        this.position = {
            x: 10,
            y: 10
        }
        this.size = 25;
    }

    draw(ctx) {
        ctx.drawImage(this.imgBall, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0)
            this.speed.x = -this.speed.x;
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0)
            this.speed.y = -this.speed.y;
    }
}