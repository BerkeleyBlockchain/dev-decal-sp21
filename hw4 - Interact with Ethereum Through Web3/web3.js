// Commands for you to execute in interactive node window
// If you want, you can also deploy it in a simple web app
const Web3 = require('web3')
// Get the endpoint under the correct test net in Infura
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/eafd0ea602544b388d0dc41b50e29544'));
// Get your contract's deployed address, access that through the link in Remix console.
const address = '0xF0b4D212fa1666C14Aa46F009647B83D73Dc2ACe';
// Your contract's ABI, from Remix IDE
const ABI  = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "withdrawAmount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"name": "remainingBal",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LogDepositMade",
		"type": "event"
	}
];


// Get properties regarding the function calls
web3.eth.getBalance
// Specify your contract
const myContract = new web3.eth.Contract(ABI, address)
// Async call to get the contract's balance, interacting with the contract
myContract.methods.balance().call().then(console.log)
