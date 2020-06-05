importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');


// firebase-messaging-sw.js
firebase.initializeApp({
    messagingSenderId: '460842117127'
});

const messaging = firebase.messaging();