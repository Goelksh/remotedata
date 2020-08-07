radio.onReceivedString(function (receivedString) {
    serial.writeLine("" + radio.receivedPacket(RadioPacketProperty.Time) + "," + radio.receivedPacket(RadioPacketProperty.SignalStrength) + "," + receivedString)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
})
radio.setGroup(20)
basic.showString("RL")
serial.writeLine("RL-Start")
