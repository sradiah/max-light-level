let max_light = 0
let start_time = 0
let new_light_level = 0
basic.forever(function () {
    max_light = 0
    start_time = input.runningTime()
    while (input.runningTime() - start_time < 5000) {
        if (new_light_level > max_light) {
            max_light = new_light_level
        }
        new_light_level = input.lightLevel()
    }
    basic.showNumber(max_light)
})
