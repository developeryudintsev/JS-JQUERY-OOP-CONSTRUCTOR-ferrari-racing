function Car(x, y) {
    this.x = x;
    this.y = y;
}

Car.prototype.getCar = function () {
    let imageCar = '<img src="car.png">';
    this.jqery = $(imageCar);
    this.jqery.css({
        width: 100,
        position: 'absolute',
        left: this.x,
        top: this.y,
        zIndex: 11
    })
    $('body').append(this.jqery);
    let currentThis = this;
    $('#right').click(function () {
        currentThis.moveRight()
    })

}

Car.prototype.moveRight = function () {
    let finish = setInterval(() => {
        this.y -= Math.random() * 2;
        this.jqery.css({
            left: this.x,
            top: this.y,
        })
        if (this.y < 5) {
            clearInterval(finish)
            console.log('you are win')
            $('#win').html('you are win');
        }
    }, 10);

}

