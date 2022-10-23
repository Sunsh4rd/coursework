// function findTheSock() {
//     console.log('Yep, the sock is found');
// }

// export default findTheSock;

// import * as openpgp from 'openpgp';
// import * as openpgp from 'openpgp/lightweight';
// import { generateKey } from 'openpgp/lightweight';

const openpgp = require('openpgp');

(async () => {
    const { privateKey, publicKey } = await openpgp.generateKey({
        type: 'rsa', // Type of the key
        rsaBits: 2048, // RSA key size (defaults to 4096 bits)
        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
        passphrase: 'super long and hard to guess secret' // protects the private key
    });
    document.getElementById('key').value = publicKey;
    const privateKey1 = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({
            armoredKey: privateKey
        }),
        passphrase: 'super long and hard to guess secret'
    });
    
    const unsignedMessage = await openpgp.createCleartextMessage({
        text: 'Hello'
    });

    const cleartextMessage = await openpgp.sign({
        message: unsignedMessage,
        signingKeys: privateKey1
    });
    console.log(cleartextMessage);
    document.getElementById('signature').value = cleartextMessage;
})();
