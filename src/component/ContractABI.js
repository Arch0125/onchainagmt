const contractABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tenant",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_document",
				"type": "string"
			}
		],
		"name": "addAgreement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "lender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tenant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productid",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "document",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "AgreementCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "AgreementSigned",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "signAgreement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "agreements",
		"outputs": [
			{
				"internalType": "address",
				"name": "lender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tenant",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "document",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "getAgreements",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "lender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "tenant",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "duration",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "document",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Agreement.Agmt",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default contractABI