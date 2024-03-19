function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
};
let index = 0;
const pic = document.querySelectorAll('#portfolio img');
const totalPic = pic.length;

console.log(totalPic);

function openGallery(event){
    if (event.target.tagName === "IMG") {
        const clikIndex = Array.from(pic).indexOf(event.target);
    }
}
// https://webdesign.tutsplus.com/build-an-interactive-image-gallery-with-html-css-and-javascript--cms-107881t