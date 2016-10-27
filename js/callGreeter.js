var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.defaultAccount=web3.eth.accounts[1];

var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) suicide(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; }  function setGreeting(string _greeting) {greeting = _greeting;}}'
var greeterCompiled = web3.eth.compile.solidity(greeterSource);
var abiDynamic = greeterCompiled.greeter.info.abiDefinition;
var address = "0xa12959e1bad514c457f407f0cabe9ef7e01c6c7e";

var greeterHandle = web3.eth.contract(abiDynamic).at(address);

//console.log(greeterHandle.greet.call());
console.log(greeterHandle.setGreeting("yahoooooo 11"));
//greeterHandle.kill.sendTransaction({from:web3.eth.accounts[0]});
