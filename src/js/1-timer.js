import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const timerField = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let countDownInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectDate = selectedDates[0];

    if (selectDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectDate;
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);
startBtn.addEventListener('click', startCount);

function startCount() {
  dateTimePicker.disabled = true;
  startBtn.disabled = true;

  iziToast.success({
    title: 'Timer started',
    message: 'The timer was run successfully',
  });

  countDownInterval = setInterval(() => {
    const currentTime = new Date();
    const timeDiff = userSelectedDate - currentTime;

    if (timeDiff < 1000) {
      iziToast.success({
        title: 'Timer done',
        message: 'The timer has finished working',
      });
      clearInterval(countDownInterval);
      updateTimerDisplay(0, 0, 0, 0);
      dateTimePicker.disabled = false;
      return;
    }
    const timeLeft = convertMs(timeDiff);
    updateTimerDisplay(
      timeLeft.days,
      timeLeft.hours,
      timeLeft.minutes,
      timeLeft.seconds
    );
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  timerField.days.textContent = addLeadingZero(days);
  timerField.hours.textContent = addLeadingZero(hours);
  timerField.minutes.textContent = addLeadingZero(minutes);
  timerField.seconds.textContent = addLeadingZero(seconds);
}
