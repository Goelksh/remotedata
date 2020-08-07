radio.onReceivedString(function (receivedString) {
    serial.writeLine("" + radio.receivedPacket(RadioPacketProperty.Time) + "," + radio.receivedPacket(RadioPacketProperty.SignalStrength) + "," + receivedString)
})
radio.setGroup(20)
basic.showString("RL")
serial.writeLine("RL-Start")
