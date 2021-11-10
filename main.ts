let Flex_Sensor = 0
basic.forever(function () {
    Flex_Sensor = pins.analogReadPin(AnalogPin.P2)
    basic.showNumber(Flex_Sensor)
    if (Flex_Sensor > 0) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
