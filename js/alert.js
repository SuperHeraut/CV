const disclaimer = "téléphone à usage professionnel uniquement  tout démarchage commercial ainsi que toute revente ou cession quelconque de mes données à des fins similaires interdite."

function openGallery(event){
    if (event.target.localName == "a") {
        alert(disclaimer)
    }
}