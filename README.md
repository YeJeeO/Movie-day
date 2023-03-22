# Movie-day
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'e2ce36f6-11ba-4210-a94a-fefeacaa80c2',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))