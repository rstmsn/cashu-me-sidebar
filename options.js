// Use browser.storage if available, otherwise fall back to chrome.storage
const storage = (typeof browser !== 'undefined') ? browser.storage : chrome.storage;

// Load the saved URL when the options page is opened
document.addEventListener('DOMContentLoaded', () => {
    storage.local.get('hosted_cashu_url').then((result) => {
        // Set the input value based on the stored URL or default value
        const urlInput = document.getElementById('hosted_cashu_url');
        urlInput.value = result.hosted_cashu_url || 'http://umbrel.local:3194';
    }).catch((error) => {
        console.error('Error retrieving hosted_cashu_url:', error);
        // Set to default value in case of an error
        document.getElementById('hosted_cashu_url').value = 'http://umbrel.local:3194';
    });
});

// Save the URL when the button is clicked
document.getElementById('save').addEventListener('click', () => {
    const url = document.getElementById('hosted_cashu_url').value;
    storage.local.set({ 'hosted_cashu_url': url }).then(() => {
        alert('Settings saved!');
        window.location.href = url
    }).catch((error) => {
        console.error('Error saving hosted_cashu_url:', error);
    });
});
