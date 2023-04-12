function ForgetData () {
    if (huskylens.getIds() > 0) {
        huskylens.forgetLearn()
    }
}
function LearnFacesWithDifferentID () {
    basic.pause(500)
    huskylens.writeLearn1(huskylens.getIds() + 1)
}
function LearnFacesWithSameID () {
    basic.pause(500)
    huskylens.writeLearn1(1)
}
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    LearnFacesWithDifferentID()
    pins.digitalWritePin(DigitalPin.P0, 0)
})
function LearnOneFace () {
    ForgetData()
    basic.pause(500)
    huskylens.writeLearn1(1)
}
pins.digitalWritePin(DigitalPin.P0, 0)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
