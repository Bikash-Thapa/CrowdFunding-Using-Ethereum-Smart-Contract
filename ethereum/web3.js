import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // We are in the browser and running the metamask
    web3 = new Web3(window.web3.currentProvider);
} else  {
    // We are in the server or user is not running the metamask
    const provider  = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/b12820ca92f94c18a39bee1c48082e5a'  
    );
    web3 = new Web3(provider);
}

export default web3;