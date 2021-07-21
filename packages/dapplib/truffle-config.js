require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name rice place concert grace help equal giggle'; 
let testAccounts = [
"0x1e3c69b355a147d996e6bafb2c3db3635ae8e026c36f573787d878118638ff2e",
"0x9582943da44ae35a3cb6d7d282969d583733e3521e89f89eaec5553c312430cc",
"0xf13e23b5245dca935d76ac085e19b10cf1ed62ca2fbaec6cf7c48ebf41fe93fb",
"0x3bf2ada40316e7747a45dda74f406bf5b3c2bab0d9c7053865d5085651989613",
"0x345f5c92cbb74e8d18078c8b531e3ddc03a743571aa39a67ed1e6ff8811b1c4f",
"0x72586090fd3d955e63ffcb97a0cb0e561cb82d79932aca4b4e1fa7bec90101ab",
"0x64b324cd9ced85195e6c42d45839dd7cbcb0a731552e4a2502ce0d11e95e7132",
"0xa4bdf06a098ef4164e17931164e6c773034b4d627e666c656e6a891e3dd1b39e",
"0xc74c35c9d633af36fa0638c6e121c76e95f5373e80a698caaeb5457f0ce97c42",
"0xe007232dbb1aa005234e5f616d49a7167af2cc7c4ff89d755bfee1b7ef6ef91a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

