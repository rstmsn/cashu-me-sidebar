// Retrieve the hosted_cashu_url from local storage
browser.storage.local.get('hosted_cashu_url').then((result) => {
    // Check if the URL exists
    if (result.hosted_cashu_url) {
        // If it exists, redirect to the stored URL
        window.location.href = result.hosted_cashu_url;
    } else {
        // If it doesn't exist, redirect to the options page
        window.location.href = browser.runtime.getURL("options.html");
    }
}).catch((error) => {
    console.error('Error retrieving hosted_cashu_url:', error);
    // Optionally redirect to the options page in case of an error
    window.location.href = browser.runtime.getURL("options.html");
});
