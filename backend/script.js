const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const bodyParser= require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/encode', (req, res) => {

    const password = req.body.password;
    const message = req.body.message;

    const encryptPass = Vigenere.Cipher(password).crypt(message);
    res.json({encoded: encryptPass});
});

app.post('/decode', (req, res) => {

    const password = req.body.password;
    const message = req.body.message;

    const decryptionPassword = Vigenere.Decipher(password).crypt(message);
    res.json({encoded: decryptionPassword});
});

app.listen(port, () => {
    console.log(`Server is online on ${port}`);
});