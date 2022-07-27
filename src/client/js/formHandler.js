function handleSubmit(event) {

    event.preventDefault()
    const input = document.getElementById('input').value;

    //verify a url was put into the form field
    if(Client.checkForURL(input)) {
        console.log("::: Form Submitted :::");
        try {
            fetch('http://localhost:8080/call', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({url : input})
            })
            //.then(manageErrors(response))
            .then(res => res.json())
            .then(function(res) {
                console.log(res);
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.Agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.Subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.Confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.Irony;
                document.getElementById('url').innerHTML = 'URL: ' + input;
            });
        } catch(e) {
                console.log("error", e);
        };
    };
};

    //console.log("::: Form Submitted :::")

    /* for testing
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */

    /*function manageErrors (response) {
        if(response.status === 404) {
            throw Error(response.statusText);
        }
        return response;
    };
    */

//document.querySelector('input[type=submit]').addEventListener("click", handleSubmit);

export { handleSubmit };
