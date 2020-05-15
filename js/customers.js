const portraits = document.querySelector('.portraits');
const reviewCitation = document.querySelector('.review__citation');
const reviewAuthor = document.querySelector('.review__author');
const url = "https://randomuser.me/api/?results=6&nat=us,dk,fr,gb";
const reviews = [
    "Travel makes one modest. You see what a tiny place you occupy in the world.",
    "This was the best trip ever. Thanks to the team !",
    "All the places were perfect, we had the best moment of our life.",
    "The travel was perfectly prepared, and the team is present for any question.",
    "The world is a book and those who do not travel read only one page.",
    "I think you travel to search and you come back home to find yourself there."
];


async function getDataAsync() {
    const response = await axios(url);
    const users = response.data.results;

    for (let i = 0; i < users.length; i++) {
        users[i].review = reviews[i];
        const img = document.createElement('img');
        img.setAttribute('src', users[i].picture.large);
        img.setAttribute('id', i);
        img.classList.add('portraits__pic');
        portraits.appendChild(img);
        reviewCitation.textContent = `"${users[i].review}"`;
        reviewAuthor.textContent = `${users[i].name.first.slice(0, 1)}. ${users[i].name.last}`;
    }

    const portraitsPics = document.querySelectorAll('.portraits__pic');
    portraitsPics.forEach(el => {
        el.addEventListener('click', () => {
            if (el === el.parentNode.lastChild) return;
            el.parentNode.replaceChild(el.parentNode.lastChild, el);
            portraits.appendChild(el);
            reviewCitation.textContent = `"${users[el.id].review}"`;
            reviewAuthor.textContent = `${users[el.id].name.first.slice(0, 1)}. ${users[el.id].name.last}`;
        })
    })
}

getDataAsync();