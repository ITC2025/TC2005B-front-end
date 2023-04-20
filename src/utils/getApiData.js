export async function getAuthenticationData(name, password){
    let data = {
        name: name,
        password: password
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
    
    sessionStorage.setItem("data", JSON.stringify(response))
}