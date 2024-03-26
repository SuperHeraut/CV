
let indexPic = 0;
const pic = document.querySelectorAll('#portfolio div img');
const totalPic = pic.length;
const gallery = document.getElementById("gallery")

function openGallery(event){
    if (event.target.localName === "img") {
        const clickIndex = Array.from(pic).indexOf(event.target);
        indexPic = clickIndex;
        gallery.style.display = "flex";
        gallery.style.opacity = "1";
        updateGallery();
    }
}

function closeGallery(){
    gallery.style.display = "none";
    gallery.style.transition = "opacity 2000ms ease-in-out, visibility 2000ms ease-in-out";

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

    galMainPic.src = pic[indexPic].src;
    thumbCont.innerHTML = "";

    pic.forEach((image, index) => {
        const thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.classList.add("thumb");
        thumb.addEventListener("click", () => updateMainPic(index));
        thumbCont.appendChild(thumb);
        thumb.src = image.src;
    });

    const thumbnails = document.querySelectorAll(".thumb");
    thumbnails[indexPic].classList.add("activeThumb");
}

function updateMainPic(index) {
    indexPic = index;
    updateGallery();
}

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