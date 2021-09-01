const loadPhoto = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))
}
loadPhoto();

const displayPhoto = (photos) => {
    const photosContainer = document.getElementById('photoContainer');
    for (let photo of photos) {
        // console.log(photo);
        const div = document.createElement('div');
        div.innerHTML = `
            <div onclick="displaySingleItem(${photo})">
            <img  src = "${photo.thumbnailUrl}.jpg">
            </div>
        `;
        photosContainer.appendChild(div);
    };
};

const displaySingleItem = photoPera => {
    /* const single = document.getElementById('single-container');
    single.innerHTML = `
        <img src = "${photo.url}.jpg">
    `; */
    console.log(photoPera);
}