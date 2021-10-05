To check your understanding of Solidity mappings please complete the following exercise.

## Exercise ##

Before we start, please follow the steps below:
1. Download the repo to your device.
2. In your terminal, navigate to `SoliditySprint` folder, and run `./test.sh`.
3. Let the tests drive you to complete the contract exists in `submission.txt` file.

## Exercise ##
Your task is to complete the `School` contract which keeps track of 
students. Students will be represented by the `Student`
struct, which has already been defined for you. They each have just a string
`name`, and an integer `age`.

In addition, the contract must include the following properties:

* A mapping of addresses to Students called `students`
* An array of addresses called `studentsAddresses`
* A function called `getStudent` which accepts an address and returns the
  name and age of the student at that address
* A function called `setStudent` which accepts an address, name, and age,
  and either creates a new student, or if an student already exists at
  that address, updates it
* A function called `getStudentCount`, which returns the total number of
  students at the school


## Advanced ## 

Once you complete the contract and it passes all tests, deploy it to the Rinkeby public test network 

_You can choose any way you want to deploy the contract, but in order to deploy a contract to Rinkeby you need the following:_

- [ ] Rinkeby ether for gas: You can use Metamask or any wallet you want.
- [ ] The contract's bytecode: You can use truffle or any compiler.
    Make sure to save what compiler version you use here because you will need it later, 
    for example(v0.8.1+commit.df193b15) or (0.5.16+commit.9c3226ce)
- [ ] Access to a Rinkeby node: You can use Infura or any Rinkeby Ethereum node.

Once you are done, and you have a contract address, you can check out your smart contract on 
[Etherscan](https://rinkeby.etherscan.io) using the contract address.

In order to give the tests access to your deployed contract, follow the steps below to "verify and publish" on Etherscan.

1. Navigate to Etherscan and search by your contract address.
2. Choose "Contract" tab next to "Transactions" tab; here you can see your contract's bytecode.
3. Click on "Verify and Publish".
4. Fill in the fields as follows:

    **Please enter the Contract Address you would like to verify**

     _(Your contract address)_

    **Please select Compiler Type**

    "Solidity (Single file)" _(or whatever you used)_

    **Please select Compiler Version**

    "v0.8.1+commit.df193b15" _(or whatever version you used)_

    **Please select Open Source License Type**

    "1) No License (None)"

5. Click "continue".
6. Copy your contract code.
7. In the "Enter the Solidity Contract Code Below" field, paste your contract code.
8. Click "Verify and Publish".
 

[Please follow the steps in this link for more explanation on deployment](https://docs.google.com/document/d/18MOAvbyU_XUSHoYZkhQJT_7PGB-a6ocAotMW1wTFGeU/edit?usp=sharing).