def on_pin_pressed_p1():
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

basic.clear_screen()
pins.digital_write_pin(DigitalPin.P0, 0)
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)

def on_forever():
    huskylens.request()
    if huskylens.is_learned(1):
        if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
            basic.show_icon(IconNames.YES)
        else:
            basic.show_icon(IconNames.NO)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
