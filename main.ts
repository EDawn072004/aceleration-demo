radio.setGroup(1)
basic.forever(function on_forever() {
    let acceleration = input.acceleration(Dimension.X)
    radio.sendNumber(acceleration)
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    basic.showNumber(receivedNumber)
    console.log(receivedNumber)
    serial.writeValue("x", receivedNumber)
})
