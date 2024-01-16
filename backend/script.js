const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

app.get('/', (req, res) => {
    res.send('<h1>This is a default route </h1>' + `<h4>On this route can't find any content</h4>`);
});

app.get('/Hello', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.get('/encode/:encode', (req, res) => {
    const encodingPassword = req.params.encode;
    const encryptPass = Vigenere.Cipher('password').crypt(encodingPassword);
    res.send(encryptPass);
});

app.get('/decode/:decode', (req, res) => {
    const decodingPassword = req.params.decode;
    const decryptionPassword = Vigenere.Decipher('password').crypt(decodingPassword);
    res.send(decryptionPassword);
});

app.listen(port, () => {
    console.log(`Server is online on ${port}`);
});