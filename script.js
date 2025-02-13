function readMind() {
  let userNumber = document.getElementById("userNumber").value;
  let loadingDiv = document.getElementById("loading");
  let resultDiv = document.getElementById("result");

  if (userNumber < 1 || userNumber > 100 || userNumber === "") {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  // Show the loading div and hide the result
  loadingDiv.classList.remove("hidden");
  resultDiv.classList.add("hidden");

  // Array of messages to cycle through
  const messages = [
    "Reading your mind...",
    "Analyzing thoughts...",
    "Scanning brainwaves...",
    "Decoding signals...",
    "Interpreting data..."
  ];
  let currentMessage = 0;
  loadingDiv.textContent = messages[currentMessage];

  // Update the loading message every second
  const interval = setInterval(() => {
    currentMessage = (currentMessage + 1) % messages.length;
    loadingDiv.textContent = messages[currentMessage];
  }, 1000);

  // After 6 seconds, stop the interval and show the result
  setTimeout(() => {
    clearInterval(interval);
    loadingDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    resultDiv.textContent = "Your number is... " + userNumber;
  }, 6000);
}
