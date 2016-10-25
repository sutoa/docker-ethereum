var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var abi = [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"type":"constructor"}];
var address = "0xe0dc39c7a40bfacb27afb52976cedffca6a7dbb2";
var greeterHandle = web3.eth.contract(abi).at(address);

console.log(greeterHandle.greet.call());
