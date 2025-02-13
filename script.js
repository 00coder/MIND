function readMind() {
    let userNumber = document.getElementById("userNumber").value;
    let loadingDiv = document.getElementById("loading");
    let resultDiv = document.getElementById("result");

    if (userNumber < 1 || userNumber > 100 || userNumber === "") {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    loadingDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");

    setTimeout(() => {
        loadingDiv.classList.add("hidden");
        resultDiv.classList.remove("hidden");
        resultDiv.textContent = "Your number is... " + userNumber;
    }, 3000);
}
