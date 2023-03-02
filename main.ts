input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.showNumber(input.temperature())
    basic.pause(100)
    images.createBigImage(`
        # # # . # # # . . .
        # . # . # . . . . .
        # # # . # . . . . .
        . . . . # . . . . .
        . . . . # # # . . .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 200)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    if (input.compassHeading() >= 337.5) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() >= 292.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() >= 247.5) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() >= 202.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() >= 157.5) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() >= 112.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() >= 67.5) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() >= 22.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() < 22.5) {
        basic.showArrow(ArrowNames.North)
    }
})
basic.showLeds(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.clearScreen()
basic.forever(function () {
	
})
