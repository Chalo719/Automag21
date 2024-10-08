window.addEventListener("DOMContentLoaded", function () {
    const phoneInputs = Array.from(document.querySelectorAll('input[type="tel"]'));

    let keyCode;

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;

        if (pos < 3) event.preventDefault();

        let matrix = "+7 (___) ___-__-__",
            i = 0,
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) : a
            });

        i = new_value.indexOf("_");

        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }

        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");

        reg = new RegExp("^" + reg + "$");

        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
        }

        if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
        }
    }

    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener("input", mask, false);
        phoneInput.addEventListener("focus", mask, false);
        phoneInput.addEventListener("blur", mask, false);
        phoneInput.addEventListener("keydown", mask, false);
    });
});