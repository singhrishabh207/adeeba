const container1 = document.querySelector('.container1');
const fireworks1 = new Fireworks.default(container1, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 60
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    sound: {
        enabled: true,
        files: ['sound/explosion0.mp3', 'sound/explosion1.mp3', 'sound/explosion2.mp3'],
        volume: {
            min: 30,
            max: 31
        }
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  });
fireworks1.start();

const container2 = document.querySelector('.container2');
const fireworks2 = new Fireworks.default(container2, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 60
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    sound: {
        enabled: true,
        files: ['sound/explosion0.mp3', 'sound/explosion1.mp3', 'sound/explosion2.mp3'],
        volume: {
            min: 1,
            max: 1
        }
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  });
fireworks2.start();
new Snowflakes();

let message = "I love you so much my dear Adeeba, < i know ma tumko bht pareshan karta hu meri vajah se tum bht pareshan hui ya kuch din i m really sorry.. > i m trying my best to be good for you as you want ma bht pareshan ya kuch din se nind bhi nai ati hai thik se  < sone jata hu toh sapne ma bhi bht khrb sapna ata hai and please try to understand mane kabhi tumse jyada kisiko importance nai di hai  < tum mere lia bht important ho bht jyada tumko bas khush deakhna chata hu ma and sabse main congrulations aj hackaton ma 2nd aai isliye  < tum jesa bologi vesa karuga bas kabhi chodke maat jana please ya kuch din ma mujhe samaj aya mujhe tumhari adat lag gai hai > and baki tumhara jo decision ho i agree with you "



let para = document.querySelector('.message');
let i = 0;
let interval = 100;
const typeWriter = () => {
    if (i < message.length) {
        if (message[i] === '>') para.innerHTML += '<br>';
        else if (message[i] === '<') para.innerHTML = '';
        else if (message[i] === ' ') para.innerHTML += ' ';
        else para.innerHTML += message[i];
        i++;
    }
    else clearInterval(callback);
}

const callback = setInterval(typeWriter, interval);
let audio = new Audio('sound/adeeba.mp3');
let isPlaying = false;
audio.loop = true;
const background = () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }
}
window.addEventListener('click', background);
