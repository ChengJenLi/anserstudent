input.onButtonPressed(Button.A, function () {
    basic.showNumber(control.deviceSerialNumber())
    radio.sendValue(convertToText(control.deviceSerialNumber()), 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= Student.length; index++) {
        basic.showString("" + (Student[index]))
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == convertToText(control.deviceSerialNumber())) {
        basic.showIcon(IconNames.Heart)
        basic.showNumber(value)
    }
    if (Student.indexOf(name) == 0) {
        Student.push(name)
        radio.sendValue(name, Student.indexOf(name))
    }
})
let Student: string[] = []
radio.setGroup(1)
Student = []
Student[0] = "T-SE"
