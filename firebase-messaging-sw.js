importScripts('https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.2/firebase-messaging.js');


// firebase-messaging-sw.js
firebase.initializeApp({
    apiKey: "AIzaSyD8HDPcKRluB3EpxHbhEUCTkkdB1F-xz30",
    authDomain: "breakit-aeb3c.firebaseapp.com",
    databaseURL: "https://breakit-aeb3c.firebaseio.com",
    projectId: "breakit-aeb3c",
    storageBucket: "breakit-aeb3c.appspot.com",
    messagingSenderId: "460842117127",
    appId: "1:460842117127:web:c5c504ad65564cffb1a2a2",
    measurementId: "G-F6L1R0M4KH"
    // messagingSenderId: '460842117127'
});



const messaging = firebase.messaging();