const quote = document.getElementById('quote');

// vas nous chercher le api avec fetch en suit une fois tu'as ça (avec then)
// tu traite la reponse en .json et avec data afficher les donnees

const getQuote = () => {

    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            // ecrire dans le html la citiation recuperer de maniere aleatoire de api
            quote.innerHTML = data.content
        });
    fetch('https ://piscum.photos/1600/1000')
        .then((res) => {
            // je recuperer url des images et je les inserre dans html
            document.getElementById('pic').innerHTML = '<img src = ${res.url} />'
        })
};

quote.addEventListener('click', () => getQuote());

getQuote();