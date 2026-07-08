document.addEventListener("DOMContentLoaded", () => {

    if (!window.PROMO || !PROMO.enabled) {
        document.getElementById("floatingPromo").remove();
        return;
    }

    const promo = document.getElementById("floatingPromo");
    const image = document.getElementById("promoImage");
    const link = document.getElementById("promoLink");
    const close = document.getElementById("closePromo");

    image.src = PROMO.image;
    image.alt = PROMO.alt;
    link.href = PROMO.link;

    let opened = false;

    // Tombol close
    close.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        promo.style.display = "none";
    });

    // HP: klik pertama buka, klik kedua pindah halaman
    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 768) {

            if (!opened) {
                e.preventDefault();
                promo.classList.add("open");
                opened = true;
            }

        }

    });

    // Klik di luar promo → tutup lagi
    document.addEventListener("click", function (e) {

        if (
            window.innerWidth <= 768 &&
            opened &&
            !promo.contains(e.target)
        ) {
            promo.classList.remove("open");
            opened = false;
        }

    });

});