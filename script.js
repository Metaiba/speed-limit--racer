let speed = 0;
const speedLimit = 80;
let tickets = 0;
const maxTickets = 3;

const speedEl = document.getElementById('speed');
const limitEl = document.getElementById('limit');
const ticketsEl = document.getElementById('tickets');
const statusEl = document.getElementById('status');
const btnAccel = document.getElementById('btnAccel');
const btnBrake = document.getElementById('btnBrake');

function updateUI() {
  speedEl.textContent = speed;
  ticketsEl.textContent = tickets;
  
  if (tickets >= maxTickets) {
    statusEl.textContent = "🚨 Game Over! You lost.";
    btnAccel.disabled = btnBrake.disabled = true;
  } else if (speed > speedLimit) {
    statusEl.textContent = "⚠️ Over Speed Limit!";
  } else {
    statusEl.textContent = "";
  }
}

btnAccel.addEventListener('click', () => {
  speed += 10;
  if (speed > speedLimit) tickets++;
  updateUI();
});

btnBrake.addEventListener('click', () => {
  speed = Math.max(0, speed - 10);
  updateUI();
});

setInterval(() => {
  if (speed > 0) {
    speed--;
    updateUI();
  }
}, 1000);

updateUI();
