let nmBer = document.getElementById('nmBer')
let play = document.querySelector('button')

let reset = document.getElementById('reset')


// n is the number of trials

// for (let n = 5; n>=1; n--){
//     // console.log(n)
//     if (n = n[n]())
// }
let lives = 5

reset

play.addEventListener( 'click', function () {
    // let num = 50
    let num = Math.floor(Math.random() * 100)
    console.log(num)

    const newNum = JSON.parse(nmBer.value);

    if (newNum === num){
        document.querySelector('p').innerText=num + " congratulation"
    }
    else {
        document.querySelector('p').innerText=  document.querySelector('p').innerText=num + " you lose"
    }
    lives -= 1
    document.querySelector('span').innerText=lives + " lives left"
    if (lives === 0){
        alert("Game over")
    }

} )
