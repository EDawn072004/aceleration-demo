radio.set_group(1)

def on_forever():
    acceleration = input.acceleration(Dimension.X)
    radio.send_number(acceleration)
basic.forever(on_forever)

def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
    print(receivedNumber)
    serial.write_value("x", receivedNumber)
radio.on_received_number(on_received_number)