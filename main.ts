let opcion = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
})
input.onGesture(Gesture.Shake, function () {
    opcion = randint(1, 3)
    if (opcion == 1) {
        basic.showIcon(IconNames.Target)
    } else if (opcion == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
})
