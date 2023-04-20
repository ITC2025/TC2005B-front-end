export async function getLoginToken(name, password){
    let data = {
        name: 'Jose',
        password: 'Jose1234'
    }

    const url = 'http://localhost:3000/login';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }

    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    return response
}