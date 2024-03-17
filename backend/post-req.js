

function postrequest(url, data){
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};
fetch(url, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from the server:', data);
    })
    .catch(error => {
        console.error('Error sending the request:', error);
    });
}

module.exports = postrequest
