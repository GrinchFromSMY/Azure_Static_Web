window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js')
            .then(() => console.log('Service Worker zarejestrowany pomyślnie.'))
            .catch((err) => console.log('Błąd rejestracji Service Workera:', err));
    }
};