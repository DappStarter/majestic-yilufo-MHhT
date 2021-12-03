require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remove coffee hockey private orange genuine'; 
let testAccounts = [
"0x142c59308d32aa5a34f84b488beadfb69af9ab7cb368b662b4c1cbdf52c88572",
"0x76dc19b6722e27e715b797041b46e2408b307b9fe3d2ac7e9b0a9833e9e6694f",
"0x4511ed86b5c948e910a6d57c7ca214f4fb2a0bfa0a7c064b2802f786f8409c7e",
"0x5f2c1e2bf46dc08e98824d13f2d04c51088f5ab04cfb3a727769eb045e4ebdfb",
"0xb6f6988608dd977804763375214471c36e3686891cac695ceab81de96fcd3092",
"0x79a802d5b7ec9bacc62965590c598c83c53f5e7e5537cd6115f5d4e24a834c1a",
"0x52494d5e2390825c2a8a776a9ef14e474745baaf62391372e24ff318a2863955",
"0x1e3c92a53a801b929d0771b28289111d4991b1db299f7e72ec1671fc87d4941a",
"0x571bd3fa4d9fbd0288704636fedb962540437826ba3cd5eb2aff215d42a14e38",
"0x8a0556635a297cdd6b3db697373da9a974bea30477ed20178a3e5a4fca29b064"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

