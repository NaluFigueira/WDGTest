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

export default function sendRequest(route, method, body, successCallback = null, errorCallback = null, requestFinishedCallback = null) {
    let headers = new Headers({
        "Content-Type": "application/json"
    });

    let api = Api();
    const token = api.getToken();

    if(token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    fetch(baseURL+route, {
        method,
        headers,
        body: JSON.stringify(body),
    }).then(async (response) => {
        let formatedResponse = await response.json();
        if(response.status === 200) {
            if(route === "login") {
                api.saveToken(formatedResponse.token);
            } else if(successCallback){
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

