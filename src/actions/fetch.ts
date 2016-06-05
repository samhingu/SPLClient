
const API_URL = '';

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        throw error;
    }
}

const parseJSON = (response) => {
    return response.json()
}

export const get = (url: string, success: (data: any) => void, error: (message: string) => void) => {
    let fullUrl = API_URL + url;
    fetch(fullUrl).then(checkStatus).then(parseJSON).then(data => { debugger; success(data) }).catch(err => error(err.message));
}
