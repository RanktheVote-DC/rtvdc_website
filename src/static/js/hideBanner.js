let hideAlert = localStorage.getItem('hideAlert');
const dismissAlert = document.querySelector('#hideBanner');

// Check local storage to see if the alert banner has been dismissed. If not, show it.
window.onload = function() {
    if (!hideAlert) {
        document.getElementById('alertBanner').style.display = 'block';
    };   
};

// Dismiss the alert banner and make note of user preference in local storage.
dismissAlert.addEventListener('click', () => {
    document.getElementById('alertBanner').style.display = 'none';
    localStorage.setItem('hideAlert', 'true');
});