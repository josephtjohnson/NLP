function checkForURL(inputURL) {
    console.log("::: Running checkForURL :::", inputURL);
    if (inputURL == null) {
        alert('URL cannot be blank');
        return false;
    }
    else if (!inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        alert('Please use a valid URL');
        return false;
    }
    console.log(true);
    return true;
};

export { checkForURL };
