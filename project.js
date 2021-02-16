// Got the idea to use this set up of code from https://www.youtube.com/watch?v=0n3ez0vTAMs and https://www.youtube.com/watch?v=WD-nUlycMX4 

const panelColors = ['green', 'red', 'indigo', 'yellow']

let gamePattern = []

let userClick = []

let started = false

let level = 0

let correctPick = false



$(() => {
    $('.panel').on('click', (event) => {
        const $panelColor = panelColors
        if ($(event.currentTarget).hasClass('panel top-left')) {
            console.log(panelColors[0])
            userClick.push(panelColors[0])
            console.log(userClick)
            playSound()
            userPatternCheck()
            pressedColor()

        } else {
            if ($(event.currentTarget).hasClass('panel top-right')) {
                console.log(panelColors[1])
                userClick.push(panelColors[1])
                console.log(userClick)
                userPatternCheck()
                pressedColor()

            } else {
                if ($(event.currentTarget).hasClass('panel bottom-left')) {
                    console.log(panelColors[2])
                    userClick.push(panelColors[2])
                    console.log(userClick)
                    userPatternCheck()
                    pressedColor()

                } else {
                    if ($(event.currentTarget).hasClass('panel bottom-right')) {
                        console.log(panelColors[3])
                        userClick.push(panelColors[3])
                        console.log(userClick)
                        userPatternCheck()
                        pressedColor()

                    }
                }
            }

        }

       


    })
    const simonStart = () => {
        const $gamePattern = Math.floor(Math.random() * 4)
        gamePattern.push(panelColors[$gamePattern])
        setInterval(() => {
            pressedColor()
        }, 500);
        // console.log($gamePattern)
        console.log(gamePattern)

    }
    $('button').on('click', simonStart)

    const userPatternCheck = () => {
        for (let i = 0; i < userClick.length ; i++) {
            if (gamePattern[i] === userClick[i]) {
                correctPick = true
                setTimeout(() => {
                    nextSequence()
                }, 500);
            } else if (gamePattern[i] !== userClick[i]) {
                correctPick = false
                alert('Game Over')
            }
        
            


        }

    }

    let nextSequence = () => {
        reset()
        simonStart()
        level ++
        $('#level').text('level ' + level)
        let randomColorPicked = panelColors[gamePattern]
        gamePattern.push(randomColorPicked)
    }

    let reset = () => {
        gamePattern = []
        userClick = []
    }

    const pressedColor = (currentColor) => {
        $('.panel' + currentColor).addClass('.flash')
        setTimeout(() => {
            $('.panel' + currentColor).removeClass('.flash')
        }, 100);
        }

        const playSound = () => {
            $('#audio')
        }

        
    




})





