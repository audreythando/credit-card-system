"use strict";
exports.__esModule = true;
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyAfCqeHHso3QdqHRI0ga0i5fNJffxKK5pg",
    authDomain: "credit-cards-system.firebaseapp.com",
    projectId: "credit-cards-system",
    storageBucket: "credit-cards-system.appspot.com",
    messagingSenderId: "635636889279",
    appId: "1:635636889279:web:3cc44ed62ef6b0a116b80a",
    measurementId: "G-PECG6C1ZQT"
};
var app = app_1.initializeApp(firebaseConfig);
var auth = auth_1.getAuth(app);
exports.auth = auth;
var provider = new auth_1.GoogleAuthProvider();
exports.provider = provider;

//# sourceMappingURL=config.js.map
