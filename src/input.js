export default class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', (even) => {
            switch(event.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
            }
        })

        document.addEventListener('keyup', (even) => {
            switch(event.keyCode) {
                case 37:
                    paddle.stop();
                    break;
                case 39:
                    paddle.stop();
                    break;
            }
        })
    }
}