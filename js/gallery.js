function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
};
let indexPic = 0;
const pic = document.querySelectorAll('#portfolio div img');
const totalPic = pic.length;

console.log(pic);
console.log(totalPic);

function openGallery(event){
    if (event.target.tagName === "img") {
        const clickIndex = Array.from(pic).indexOf(event.target);
        indexPic = clickIndex;
        console.log(indexPic);
        updateGallery();
        document.getElementById("gallery").style.display = "flex";
    }
}

function closeGallery(){
    document.getElementById("gallery").style.display = "none";
}

function changePic(direction) {
    indexPic += direction;
    if (indexPic >= totalPic) {
        indexPic = 0;
    } else if (indexPic < 0) {
        indexPic = totalPic - 1;
    }
    updateGallery();
}

function updateGallery() {
    const galMainPic = document.getElementById("galMainPic");
    const thumbCont = document.getElementById("thumbCont");

    // Update the main lightbox image
    galMainPic.src = pic[indexPic].src;

    // Clear existing thumbnails
    thumbCont.innerHTML = "";

    // Add new thumbnails
    pic.forEach((image, index) => {
        const thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.classList.add("thumb");
        thumb.addEventListener("click", () => updatePic(index));
        thumbCont.appendChild(thumb);
        console.log(image);
    });

    // Highlight the current thumbnail
    const thumbnails = document.querySelectorAll(".thumb");
    thumbnails[indexPic].classList.add("activeThumb");
}

function updateMainPic(index) {
    indexPic = index;
    updateGallery();
}

// Add initial thumbnails
updateGallery();

document.addEventListener("keydown", function (e) {
    if (document.getElementById("gallery").style.display === "flex") {
        if (e.key === "ArrowLeft") {
            changePic(-1);
        } else if (e.key === "ArrowRight") {
            changePic(1);
        }
    }
});

// https://webdesign.tutsplus.com/build-an-interactive-image-gallery-with-html-css-and-javascript--cms-107881t