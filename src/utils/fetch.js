const baseURL = "https://reqres.in/api/";

function Api (){
    function saveToken(token) {
        localStorage.setItem("token", token);
    }

    function getToken() {
        return localStorage.getItem("token");
    }

    return  {
        saveToken,
        getToken
    }
}

export default function sendRequest(route, method, body, successCallback = null, errorCallback = null, requestFinishedCallback = null, queryParams = "") {
    let headers = new Headers({
        "Content-Type": "application/json"
    });

    let api = Api();
    const token = api.getToken();

    if(token) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    let config = {
        method,
        headers,
    }

    if(method !== "GET") {
        config.body = JSON.stringify(body);
    }

    if(method === "DELETE") {
        config.headers = undefined;
    }
    
    fetch(baseURL+route+"?delay=2"+(queryParams ? `&${queryParams}`: ''), config).then(async (response) => {
        let formatedResponse = {}
        if(method !== "DELETE") {
            formatedResponse = await response.json();
        }
        if(response.status === 200 || response.status === 204) {
            if(route === "login") {
                api.saveToken(formatedResponse.token);
            } 
            
            if(successCallback){
                successCallback(formatedResponse);
            }
        } else {
            alert(formatedResponse.error)
        }
    }).catch((error) => {
        alert(error);
        if(errorCallback) {
            errorCallback(error)
        }
    }).finally(() => {
        if(requestFinishedCallback) {
            requestFinishedCallback()
        }
    })
}

