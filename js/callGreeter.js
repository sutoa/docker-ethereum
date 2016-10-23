var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var abi = [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"type":"constructor"}];
var address = "0x2b76538167a8d0c46d47d02ce722afec707a114b";
var greeterHandle = web3.eth.contract(abi).at(address);

console.log(greeterHandle.greet.call();
