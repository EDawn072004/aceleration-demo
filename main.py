acceleration = 0
txrx = 0
# 0 is receiver; 1 is transmitter
radio.set_group(1)
serial.write_line("hfjgkj")
"""

def on_received_number(receivedNumber):

basic.show_string("Receiver")

serial.write_value("x", receivedNumber)

radio.on_received_number(on_received_number)

"""

def on_forever():
    global acceleration, txrx
    acceleration = input.acceleration(Dimension.X)
    led.toggle(0, 0)
    if input.button_is_pressed(Button.A):
        txrx = 0
        basic.show_string("R")
    if input.button_is_pressed(Button.B):
        txrx = 1
        basic.show_string("T")
    if txrx == 1:
        radio.send_number(acceleration)
    if txrx == 0:
        serial.write_number(acceleration)
basic.forever(on_forever)
