let qrBox = document.getElementById("qrBox");
let qr;

function generateQR() {
    let text = qrText.value;
    let color = qrColor.value;
    let bg = bgColor.value;

    qrBox.innerHTML = "";

    if (text.trim() === "") return;

    qr = new QRCode(qrBox, {
        text: text,
        width: 180,
        height: 180,
        colorDark: color,
        colorLight: bg
    });
}

/* Auto-generate on input */
qrText.addEventListener("input", generateQR);
qrColor.addEventListener("input", generateQR);
bgColor.addEventListener("input", generateQR);

/* Dark / Light Mode */
function toggleMode() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

/* Download QR */
function downloadQR() {
    let img = qrBox.querySelector("img");
    if (!img) return alert("Generate QR first");

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
}
