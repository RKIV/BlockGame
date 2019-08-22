export default class Paddle {
    constructor(game) {
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.width = 150;
        this.height = 20;

        this.maxSpeed = .5;
        this.speed = 0;
        
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10,
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "#0ff";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        console.log(this.position);
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.position.x += this.speed * deltaTime

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x > this.gameWidth-this.width) this.position.x = this.gameWidth-this.width;
    }
}