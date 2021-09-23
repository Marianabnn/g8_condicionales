let numero_aleatorio = 0
input.onButtonPressed(Button.A, function () {
    numero_aleatorio = randint(1, 3)
    basic.showNumber(numero_aleatorio)
    if (numero_aleatorio == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (numero_aleatorio == 2) {
        basic.showIcon(IconNames.Ghost)
    }
    if (numero_aleatorio == 3) {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
	
})
