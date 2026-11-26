// Lunch Amazing Race settings. This is the only file you need to edit.

window.RACE_CONFIG = {
  // 1. Paste the firebaseConfig values from Firebase console > Project settings > Your apps.
  firebase: {
    apiKey: "AIzaSyBPz-hKN4aErBMgMIV1z5ZYqG8sgc9zPxs",
    authDomain: "lunch-race.firebaseapp.com",
    projectId: "lunch-race",
    storageBucket: "lunch-race.firebasestorage.app",
    messagingSenderId: "60890303398",
    appId: "1:60890303398:web:03dae0cc22d2b959f49d67"
  },

  // 2. Secret part of the facilitator link. The board opens at:
  //    https://<your-site>/#host-race-b61d1421
  //    Change it if you like (letters, numbers and dashes only).
  facilitatorKey: "race-b61d1421",

  // 3. Optional: shown to teams under "Selfie proof", e.g. "the Race HQ group" or "+65 9123 4567".
  whatsappNote: ""
};
