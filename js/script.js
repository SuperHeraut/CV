function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
};

function clock() {
    let date = new Date();
    let annee = date.getFullYear();
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let hodie = annee + "<br>" + padWithLeadingZeros(mois,2) + "/" + padWithLeadingZeros(jour,2);

    document.getElementById("horologium").innerHTML = hodie;
    setTimeout(clock, 1);
};

clock();

function analog() {
    date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let millisec = date.getMilliseconds();
    const secsHand = document.querySelector('.secs');
    const minsHand = document.querySelector('.mins');
    const hourHand = document.querySelector('.hours');
    const secsDot = document.querySelector('#seconde');
    const minsDot = document.querySelector('#minute');
    const hourDot = document.querySelector('#heure');

    const secsDegs = ((seconde / 60) * 360) + ((millisec / 60000) * 360) + 90;
    const secsDotDegs = (secsDegs * -1);
    secsHand.style.transform = `rotate(${secsDegs}deg)`;
    secsDot.style.transform = `rotate(${secsDotDegs}deg)`;

    const minsDegs = ((minute / 60) * 360) + ((seconde / 60) * 6) + ((millisec / 60000) * 6) + 90;    const minsDotDegs = (minsDegs * -1);
    minsHand.style.transform = `rotate(${minsDegs}deg)`;
    minsDot.style.transform = `rotate(${minsDotDegs}deg)`;

    const hourDegs = ((heure / 12) * 360) + ((minute/60)*30) + ((seconde / 3600)*30) + 90;
    const hourDotDegs = (hourDegs * -1);
    hourHand.style.transform = `rotate(${hourDegs}deg)`;
    hourDot.style.transform = `rotate(${hourDotDegs}deg)`;

    document.getElementById("heure").innerHTML = padWithLeadingZeros(heure,2);
    document.getElementById("minute").innerHTML = padWithLeadingZeros(minute,2);
    document.getElementById("seconde").innerHTML = padWithLeadingZeros(seconde,2);
};

setInterval(analog, 1);

analog()