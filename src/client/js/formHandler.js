function handleSubmit(event) {

    event.preventDefault()
    console.log("::: Form Submitted :::");

    //pull elements to update for sentiment analysis
    let agreementTxt = document.getElementById('agreement');
    let subjectivityTxt = document.getElementById('subjectivity');
    let confidenceTxt = document.getElementById('confidence');
    let ironyTxt = document.getElementById('irony');
    let site = document.getElementById('url').value;

    //verify a url was put into the form field
    if(Client.checkForURL(site)) {
        try {
            postData('http://localhost:8080/call', site)
            //.then(manageErrors(response))
            .then(function(response) {
                console.log(response);
                agreementTxt.insertAdjacentHTML("beforeend", response.agreement),
                subjectivityTxt.insertAdjacentHTML("beforeend", response.subjectivity),
                confidenceTxt.insertAdjacentHTML("beforeend", response.confidence),
                ironyTxt.insertAdjacentHTML("beforeend", response.irony)
            });
        } catch(e) {
                console.log("error", e);
        };
    };
};

/* Function to POST data - recycled from weather app */
    const postData = async (url = '', data = {}) => {
        const response = await fetch (url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url : url})
        });

        try {
            const newData = await response.json;
        }
        catch(error) {
            console.log('error', error);
        }
    };

    //console.log("::: Form Submitted :::")

    /* for testing
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */

    function manageErrors (response) {
        if(response.status === 404) {
            throw Error(response.statusText);
        }
        return response;
    };

document.querySelector('input[type=submit]').addEventListener("click", handleSubmit);

export { handleSubmit };
