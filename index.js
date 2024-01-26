const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if(e.keyCode===13)
    play()
})

button.addEventListener('click', play);

function play(){
    const userNumber = document.querySelector('#guess').value;

    if (userNumber<1 || userNumber>20){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 20!',
        })
    }
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
        })
    }
    else {
        if (userNumber<answer){
            Swal.fire('Попробуй число повыше!',
            'Компьютер побеждает!')
        }
    else if (userNumber>answer){
        Swal.fire('Попробуй число пониже!',
            'Компьютер побеждает!')
    }
    else {
        Swal.fire({
            title: 'Победа!',
            imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Победа',
        })
    }
    }
}
gsap.from('.container',{x:-300,duration:1.5,delay:0.5,opacity:0})