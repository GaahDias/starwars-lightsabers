///////////////////////////////////////////////
let root = document.documentElement;

const lsHilt = document.getElementById('lightsaber-hilt');
const lsBlade = document.getElementById('lightsaber-blade');
const lsOn = document.getElementById('lightsaber-on');
const lsOff = document.getElementById('lightsaber-off');

const inputs = document.querySelectorAll('input');

///////////////////////////////////////////////
let time = 850;

lsHilt.addEventListener('click', () => {
    setTimeout(() => {
        lsBlade.classList.toggle('on-off');
    }, time);

    if (lsBlade.classList.contains('on-off')) {
        lsOn.play();
        time = 950;
    } else {
        lsOff.play();
        time = 300;
    }
})

///////////////////////////////////////////////
inputs.forEach(input => {
    input.addEventListener('click', () => {
        switch (input.id) {
            case 'red':
                root.style.setProperty('--lightsaber-blade-color', '#ff0808');
                root.style.setProperty('--lightsaber-shadow-color', '#ff0808');
                break;
            case 'blue':
                root.style.setProperty('--lightsaber-blade-color', '#3394f5');
                root.style.setProperty('--lightsaber-shadow-color', '#3394f5');
                break;
            case 'green':
                root.style.setProperty('--lightsaber-blade-color', '#0eb51a');
                root.style.setProperty('--lightsaber-shadow-color', '#0eb51a');
                break;
            case 'purple':
                root.style.setProperty('--lightsaber-blade-color', '#b71ee6');
                root.style.setProperty('--lightsaber-shadow-color', '#b71ee6');
                break;
            case 'orange':
                root.style.setProperty('--lightsaber-blade-color', '#f5a422');
                root.style.setProperty('--lightsaber-shadow-color', '#f5a422');
                break;
            case 'white':
                root.style.setProperty('--lightsaber-blade-color', '#f9f9f9');
                root.style.setProperty('--lightsaber-shadow-color', '#d9d9d9');
                break;
        }
    })
});
