input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
})
led.plot(2, 2)
basic.forever(function () {
    led.plot(4, 4)
})
