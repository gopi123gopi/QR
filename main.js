



  let qrBox = document.getElementById("qrBox");

function generateQR() {
    let text = document.getElementById("qrText").value;

    qrBox.innerHTML = ""; // clear old QR

    if (text.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    new QRCode(qrBox, {
        text: text,
        width: 150,
        height: 150
    });
}
