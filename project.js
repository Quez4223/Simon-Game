// Got the idea to use this set up of code from https://www.youtube.com/watch?v=0n3ez0vTAMs

const panelColors = ['green', 'red', 'indigo', 'yellow']

const gamePattern = []

const userClick = 0

const noPress = true


$(() => {
    $('.panel').on('click', (event) => {
        const $panelColor = panelColors
        if ($(event.currentTarget).hasClass('panel top-left')) {
            console.log(panelColors[0])
        } else {
            if ($(event.currentTarget).hasClass('panel top-right')) {
                console.log(panelColors[1])
            } else {
                if ($(event.currentTarget).hasClass('panel bottom-left')) {
                    console.log(panelColors[2])
                } else {
                    if ($(event.currentTarget).hasClass('panel bottom-right')) {
                        console.log(panelColors[3])
                    } else {
                        if ($(event.currentTarget).hasClass('panel')) {
                            console.log(panelColors).blink(500)
                        }
                    }
                } 
            }

        }


    })
    
    $('button').on('click', () => {
        const $gamePattern = Math.floor(Math.random() * 4)
        gamePattern.push(panelColors[$gamePattern])
        console.log($gamePattern)
        console.log(gamePattern)
    })


    simonSays() {
        noPress = true
        let delay
        if (gamePattern.length > 10) {
            delay = 400
        }
        const pause = setTimeout() {
            for (let i = 0; i < gamePattern.length; i++) {
            
            }
        }
    }

}) 
