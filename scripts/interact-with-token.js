
// scripts/interact-with-token.js
//const { dotenv } = require("dotenv");


const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

console.log("api key:", API_KEY);
console.log("private key: ", PRIVATE_KEY);
console.log("contract address:", CONTRACT_ADDRESS);

// artifact (using for abi)
const contract = require("../artifacts/contracts/Token.sol/Token.json"); 	

// provider (node provider that gives read and write access to the blockchain)
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer (account that owns the contract and can sign transactions off
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);


async function main () {
	
	// console.log(JSON.stringify(contract.abi));	
	// contract instance

	const tokenInstance = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
	const tx = await tokenInstance.transfer('0xf00948285Ab85a213082Ae478A511C921F6eA4F8', 50000);
	//const contractBalance = await tokenInstance.balanceOf('0x1E59B7BE29ECd7E639550857C065005464e5D927');
	//console.log("Contract owner has ", contractBalance);

	
	
	// var url = 'https://eth-goerli.alchemyapi.io/v2/MtUu3klcuLIuPLY2Jc92o5E0UpTv6Url';
	// var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
	// const signer =  customHttpProvider.getSigner('0x5FbDB2315678afecb367f032d93F642f64180aa3');
	// customHttpProvider.getBlockNumber().then((result) => {
    	//	console.log("Current block number:" + result);
	//});
	

}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});	
