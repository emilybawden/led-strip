let range: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.easeBrightness()
basic.showNumber(3)
basic.pause(500)
basic.showNumber(2)
basic.pause(500)
basic.showNumber(1)
basic.pause(500)
basic.clearScreen()
for (let index = 0; index <= 14; index++) {
    for (let brightness = 0; brightness <= 51; brightness++) {
        basic.pause(100 - brightness * 2)
        brightness = brightness * 5
        strip.setPixelColor(index, neopixel.rgb(brightness, brightness, brightness))
        strip.show()
    }
}
basic.pause(1500)
for (let index = 0; index <= 14; index++) {
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(100)
}
for (let index = 0; index <= 14; index++) {
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(70)
}
for (let index = 0; index <= 14; index++) {
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(50)
}
for (let index = 0; index <= 14; index++) {
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    basic.pause(50)
}
for (let index = 0; index <= 14; index++) {
    range = strip.range(0, index)
    range.showRainbow(1, 360)
    range.show()
    basic.pause(70)
}
strip.showRainbow(1, 360)
for (let index = 0; index < 100; index++) {
    strip.rotate(1)
    strip.show()
    basic.pause(50)
}
for (let index = 0; index <= 14; index++) {
    strip.setPixelColor(14 - index, neopixel.rgb(0, 0, 0))
    strip.show()
    basic.pause(100)
}
while (true) {
    basic.showString("BACK TO MAKE FOR MORE")
}
