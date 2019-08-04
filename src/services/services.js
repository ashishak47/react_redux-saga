const API_ROOT = 'https://gorest.co.in/public-api';

const ACCESS_TOKEN = "pQVlaaSRdI4ZmWjqnCeZxZqzNNYVzZWJ4j-X";

const USER_ID = "1111";

const HEADERS = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + ACCESS_TOKEN
};

const getData = (url) => {
    return fetch(`${API_ROOT}${url}`, {
        method: 'GET',
        headers: HEADERS,
    }
    ).then(res => res.json())
};


const postData = (url, payload) => {
    return fetch(`${API_ROOT}${url}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: HEADERS,
    }
    ).then(res => res.json())

};

const deleteData = (url) => {
    return fetch(`${API_ROOT}${url}`, {
        method: 'DELETE',
        headers: HEADERS,
    }
    ).then(res => res.json())

};

export {
    getData,
    postData,
    deleteData,
    ACCESS_TOKEN,
    API_ROOT,
    HEADERS,
    USER_ID
};

