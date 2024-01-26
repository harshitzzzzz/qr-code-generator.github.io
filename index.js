let imgbox = document.querySelector('#imgbox');
let qrimg = document.querySelector('#qrimg');
let qrText = document.querySelector('#qrText');

document.querySelector('#btn').addEventListener('click', function() {
    if (qrText.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(function() {
            qrText.classList.remove('error');
        }, 1000);
    }
});
