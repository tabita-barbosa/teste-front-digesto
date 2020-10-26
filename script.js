// Autorization: Basic token: fe1db0ca-7507-4f8c-8439-f6a1b5d4973c
// Authorization: Basic email_address/token:api_token


// ENDPOINT API  /api/tribproc/<numero_processo>
// TOKEN autenticação fe1db0ca-7507-4f8c-8439-f6a1b5d4973c


// UM DOS JEITOS DE CHAMAR A API, NA DOCUMENTAÇÃO USAM GET
async function getProcess(){
    let response = await fetch(`https://op.digesto.com.br//api/tribproc/5001682-88.2020.8.13.0672`);
    let data = await response.json()
    return data;
}

getProcess().then(data => console.log(data));



