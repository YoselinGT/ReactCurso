const url = 'https://jsonplaceholder.typicode.com/users';

/*fetch(url,{
    method:'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Autorization' : 'Bearer acadebeexistiruntokendeautorizacion'
    },
    body: JSON.stringify({
        name:"Chanchito",
        website:"google.com"
    })
})
    .then((response) => response.json())
    .then(data => console.log(data))*/

    const fn = async () => {
        const response = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Autorization' : 'Bearer acadebeexistiruntokendeautorizacion'
            },
            body: JSON.stringify({
                name:"Chanchito",
                website:"google.com"
            })
        })

        const data = await response.json();
        console.log(data)
    }

    fn();