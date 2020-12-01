let txrx = 0
//  0 is receiver; 1 is transmitter
radio.setGroup(1)
let acceleration = input.acceleration(Dimension.X)
if (input.buttonIsPressed(Button.A)) {
    txrx = 0
    basic.showString("R")
}

if (input.buttonIsPressed(Button.B)) {
    txrx = 1
    basic.showString("T")
}

basic.forever(function on_forever() {
    let txrx: number;
    if (input.buttonIsPressed(Button.A)) {
        txrx = 0
        basic.showString("R")
    }
    
    if (input.buttonIsPressed(Button.B)) {
        txrx = 1
        basic.showString("T")
    }
    
    if (txrx == 1) {
        radio.sendNumber(acceleration)
    }
    
    if (txrx == 0) {
        led.toggle(0, 0)
        serial.writeValue("x", acceleration)
    }
    
})
/** 
def on_received_number(receivedNumber):
    
    basic.show_string("Receiver")
    serial.write_value("x", receivedNumber)
radio.on_received_number(on_received_number)

 */
