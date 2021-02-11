// Got the idea to use this set up of code from https://www.youtube.com/watch?v=0n3ez0vTAMs

const panelColors = ['green', 'red', 'indigo', 'yellow']

const gamePattern = []

const userClick = 0

const started = false

const level = 0


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

}) 



// opening move after click start
// simonStart() {
//     $gamePattern
//     userClick = 0
// }



// winning condition idea 
//  winningGamePattern() { 
//     let times = 0;
//       const blinkTop = setTimeout(function() {
//         $('#panel top-left').effect('bounce', 1);
//         $('#panel top-right').effect('bounce', 1);
//       }, 250);
//       const blinkBottom = setTimeout(function() {
//         $('#panel bottom-left').effect('bounce', 1);
//         $('#panel bottom-right').effect('bounce', 1);
//       }, 250);
//       if (times > _) {
//         const newGame = setTimeout(function() { 
//           simonStart();
//         }, );
//       }
//     }, );

// }