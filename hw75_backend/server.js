const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');
const app = express();
const port = 3051;

app.use(cors());
app.use(express.json());

app.post('/encode', (req, res)=> {
    res.send({"encoded": Vigenere.Cipher(req.body.password).crypt(req.body.message)});
});

app.post('/decode', (req, res)=> {
        res.send({"decoded": Vigenere.Decipher(req.body.password).crypt(req.body.message)});
});

app.listen(port, () => {
    console.log('We"re live on http:localhost:' + port)
});