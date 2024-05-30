let button = document.querySelectorAll('button');
let toastBox = document.getElementById('toastBox');

const successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
const errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`;
const invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input!, check again`;

button.forEach((btn) => {
    btn.addEventListener('click', () => {
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toastBox.appendChild(toast);

        if(btn.innerText === 'Success') {
            toast.innerHTML = successMsg;
            toast.classList.add('success');
        }
        else if(btn.innerText === 'Error')  {
            toast.innerHTML = errorMsg;
            toast.classList.add('error');
        }
        else if(btn.innerText === 'Invalid')    {
            toast.innerHTML = invalidMsg;
            toast.classList.add('invalid');
        }

        setTimeout(() => {
            toast.remove();
        }, 3000);
    });
});