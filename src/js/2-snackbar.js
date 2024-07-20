import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  btnEl: document.querySelector('button'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(refs.formEl);
  const delay = formData.get('delay');
  const status = formData.get('state');

  const isSuccess = status === 'fulfilled';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });

  promise
    .then(value =>
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms
`,
      })
    )
    .catch(error =>
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms
`,
      })
    );
});

// test;
