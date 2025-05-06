const walk = setInterval(() => {
    console.log('you are walking')
}, 1000)

const finishWalking = setTimeout(() => {
    console.log('you have finished walking')
    clearInterval(walk)
}, 3000)