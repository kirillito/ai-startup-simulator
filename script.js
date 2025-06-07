let meters = {
  investor: 80,
  public: 90,
  capability: 7,
};

function updateMeters() {
  for (const key in meters) {
    document.getElementById(`meter-${key}`).textContent = `${meters[key]}%`;
  }
}

function logMessage(msg) {
  const log = document.getElementById("log-messages");
  const entry = document.createElement("p");
  entry.textContent = msg;
  log.prepend(entry);
}

function launchFakeDemo() {
  logMessage("You launched a fake demo with inspirational quotes and spinning circles.");
  meters.public += 5;
  updateMeters();
}

function writePressRelease() {
  const buzzwords = ["Transformational", "Consciousness-Adjacent", "Decentralized", "Empathy-Infused"];
  const chosen = buzzwords.sort(() => 0.5 - Math.random()).slice(0, 3).join(" + ");
  logMessage(`Press Release: ${chosen} AI for a better tomorrow.`);
  meters.investor += 3;
  updateMeters();
}

function fireEthicsOfficer() {
  logMessage("You fired and rehired the Ethics Officer. Regulators pleased.");
  meters.investor += 2;
  meters.capability -= 1;
  updateMeters();
}

function attendPitch() {
  const msg = investorMessages[Math.floor(Math.random() * investorMessages.length)];
  logMessage(`VC Pitch: ${msg}`);
  meters.investor += 4;
  meters.public -= 2;
  updateMeters();
}

// Trigger random events every 30 seconds
setInterval(() => {
  const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
  logMessage(`🚨 Event: ${event.text}`);
  Object.keys(event.effects).forEach(key => {
    meters[key] += event.effects[key];
  });
  updateMeters();
}, 30000);

window.onload = updateMeters;
