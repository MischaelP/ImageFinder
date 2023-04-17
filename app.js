btnSearch = document.querySelector('.btn')
container = document.querySelector('#container')
input = document.querySelector('#input')
containerImage = document.querySelector('.containerImage')
cards = document.querySelector(".cards")
photos = document.querySelectorAll(".photos")
photoTitle = document.querySelector(".photoTitle")

let e = btnSearch.addEventListener('click',getImages);

const apikey = "mjgNNXCx6hQhiCsrhww1nWcFpkS8HdC36AAnAbhDWbAUm5DVkuQmi7H5"

async function getImages(e) {
    e.preventDefault();
    let query = input.value
    let nbPix = 0;
    cleanImg();
    const url = "https://api.pexels.com/v1/search?query="+query+"&per_page=15&page2"
    
    const reponse = await fetch(url , {
        headers:{
            Authorization: apikey}
        }
        )
        
        const data = await reponse.json();

        data.photos.forEach(photo => {
            if (photo.src && photo.src.medium) {
                const div = document.createElement("div")
                div.className = "cards"
                const photos = document.createElement("img")
                photos.setAttribute("src", photo.src.large)
                photos.setAttribute("alt", "Photo by "+photo.photographer)
                const photoTitle = document.createElement("h3")
                photoTitle.innerText = "Artiste : " +photo.photographer
                photoTitle.className = "photoTitle"
                div.appendChild(photos)
                div.appendChild(photoTitle)
                containerImage.appendChild(div)

            }
        });


        query = "";

}

function cleanImg() {
    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
        card.remove();
    });
}