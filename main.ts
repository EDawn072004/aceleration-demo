let txrx = 0
//  0 is receiver; 1 is transmitter
radio.setGroup(1)
let acceleration = input.acceleration(Dimension.X)
if (input.buttonIsPressed(Button.A)) {
    txrx = 0
}

if (input.buttonIsPressed(Button.B)) {
    txrx = 1
}

basic.forever(function on_forever() {
    if (txrx == 1) {
        radio.sendNumber(acceleration)
    }
    
})
/** 
def on_received_number(receivedNumber):
    led.toggle(0, 0)
    basic.show_string("Receiver")
    serial.write_value("x", receivedNumber)
radio.on_received_number(on_received_number)

 */
