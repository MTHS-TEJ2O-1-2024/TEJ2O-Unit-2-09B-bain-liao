/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program is a game of rock, paper, scissors
*/

// variables
let randomNumber: number = 0
let score: number = 0
let scoreNumber = score

input.onButtonPressed(Button.A, function () {
    let scoreNumber = score + 1
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('Score:' + scoreNumber)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // pause and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
