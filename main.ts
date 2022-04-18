input.onButtonPressed(Button.A, function () {
    basic.showNumber(control.deviceSerialNumber())
    radio.sendValue(convertToText(control.deviceSerialNumber()), 0)
})
input.onButtonPressed(Button.B, function () {
    let Student: number[] = []
    for (let index = 0; index <= Student.length; index++) {
        basic.showString("" + (Student[index]))
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == convertToText(control.deviceSerialNumber())) {
        basic.showIcon(IconNames.Heart)
        basic.showNumber(value)
    }
})
radio.setGroup(1)
