txrx = 0 # 0 is receiver; 1 is transmitter

radio.set_group(1)
acceleration = input.acceleration(Dimension.X)

if input.button_is_pressed(Button.A):
    txrx = 0

if input.button_is_pressed(Button.B):
    txrx = 1

def on_forever():
    if txrx == 1:
        radio.send_number(acceleration)
    if txrx == 0:
        led.toggle(0, 0)
        serial.write_value("x", acceleration)
basic.forever(on_forever)

"""
def on_received_number(receivedNumber):
    
    basic.show_string("Receiver")
    serial.write_value("x", receivedNumber)
radio.on_received_number(on_received_number)
"""