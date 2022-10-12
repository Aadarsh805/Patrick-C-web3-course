const ethers = require("ethers")
const fs = require("fs")
require("dotenv").config()

// typescript
// import {ethers} from 'ethers'
// import * as fs from 'fs';
// import "dotenv/config"

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    // encryt privateKey
    // const encryptedJson = fs.readFileSync('./.encryptedKey.json', "utf8")
    // let wallet = new ethers.Wallet.fromEncryptedJsonSync(encryptedJson, process.env.PRIVATE_KEY_PASSWORD)

    // wallet = await wallet.connect(provider)

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8"
    )

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("deploying please wait...")
    const contract = await contractFactory.deploy()
    console.log(`Contract Address: ${contract.address}`)

    /* const transactionReceipt = */ await contract.deployTransaction.wait(1)

    //   console.log("here is the deployment transaction: ", contract.deployTransaction)
    //   console.log("here is the transaction receipt: ", transactionReceipt)

    // console.log("let's deploy with only transaction data!");
    // const nonce = await wallet.getTransactionCount();
    // const tx = {
    //   nonce: nonce,
    //   gasPrice: 20000000000,
    //   gasLimit: 1000000,
    //   to: null,
    //   value: 0,
    //   data: "0x608060405234801561001057600080fd5b5061093b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780635e9589cb1461007a5780636057361d146100ab5780636f760f41146100c75780638bab8dd5146100e3575b600080fd5b610064610113565b60405161007191906102b2565b60405180910390f35b610094600480360381019061008f919061030d565b61011c565b6040516100a29291906103ca565b60405180910390f35b6100c560048036038101906100c0919061030d565b6101d8565b005b6100e160048036038101906100dc919061052f565b6101e2565b005b6100fd60048036038101906100f8919061058b565b61026b565b60405161010a91906102b2565b60405180910390f35b60008054905090565b6001818154811061012c57600080fd5b906000526020600020906002020160009150905080600001549080600101805461015590610603565b80601f016020809104026020016040519081016040528092919081815260200182805461018190610603565b80156101ce5780601f106101a3576101008083540402835291602001916101ce565b820191906000526020600020905b8154815290600101906020018083116101b157829003601f168201915b5050505050905082565b8060008190555050565b6001604051806040016040528083815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101908161024191906107e0565b5050508060028360405161025591906108ee565b9081526020016040518091039020819055505050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6000819050919050565b6102ac81610299565b82525050565b60006020820190506102c760008301846102a3565b92915050565b6000604051905090565b600080fd5b600080fd5b6102ea81610299565b81146102f557600080fd5b50565b600081359050610307816102e1565b92915050565b600060208284031215610323576103226102d7565b5b6000610331848285016102f8565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610374578082015181840152602081019050610359565b60008484015250505050565b6000601f19601f8301169050919050565b600061039c8261033a565b6103a68185610345565b93506103b6818560208601610356565b6103bf81610380565b840191505092915050565b60006040820190506103df60008301856102a3565b81810360208301526103f18184610391565b90509392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61043c82610380565b810181811067ffffffffffffffff8211171561045b5761045a610404565b5b80604052505050565b600061046e6102cd565b905061047a8282610433565b919050565b600067ffffffffffffffff82111561049a57610499610404565b5b6104a382610380565b9050602081019050919050565b82818337600083830152505050565b60006104d26104cd8461047f565b610464565b9050828152602081018484840111156104ee576104ed6103ff565b5b6104f98482856104b0565b509392505050565b600082601f830112610516576105156103fa565b5b81356105268482602086016104bf565b91505092915050565b60008060408385031215610546576105456102d7565b5b600083013567ffffffffffffffff811115610564576105636102dc565b5b61057085828601610501565b9250506020610581858286016102f8565b9150509250929050565b6000602082840312156105a1576105a06102d7565b5b600082013567ffffffffffffffff8111156105bf576105be6102dc565b5b6105cb84828501610501565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061061b57607f821691505b60208210810361062e5761062d6105d4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610659565b6106a08683610659565b95508019841693508086168417925050509392505050565b6000819050919050565b60006106dd6106d86106d384610299565b6106b8565b610299565b9050919050565b6000819050919050565b6106f7836106c2565b61070b610703826106e4565b848454610666565b825550505050565b600090565b610720610713565b61072b8184846106ee565b505050565b5b8181101561074f57610744600082610718565b600181019050610731565b5050565b601f8211156107945761076581610634565b61076e84610649565b8101602085101561077d578190505b61079161078985610649565b830182610730565b50505b505050565b600082821c905092915050565b60006107b760001984600802610799565b1980831691505092915050565b60006107d083836107a6565b9150826002028217905092915050565b6107e98261033a565b67ffffffffffffffff81111561080257610801610404565b5b61080c8254610603565b610817828285610753565b600060209050601f83116001811461084a5760008415610838578287015190505b61084285826107c4565b8655506108aa565b601f19841661085886610634565b60005b828110156108805784890151825560018201915060208501945060208101905061085b565b8683101561089d5784890151610899601f8916826107a6565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60006108c88261033a565b6108d281856108b2565b93506108e2818560208601610356565b80840191505092915050565b60006108fa82846108bd565b91508190509291505056fea2646970667358221220e987e2e8c1f03d47dfa35c50845bc059ec57560fbae00affaa276106343c0fdd64736f6c63430008110033",
    //   chainId: 1337,
    // };

    // //   const signedTxResponse = await wallet.signTransaction(tx);
    // const sentTxResponse = await wallet.sendTransaction(tx);
    // await sentTxResponse.wait(1);
    // //   console.log(signedTxResponse);
    // console.log(sentTxResponse);

    const currentFavoriteNumber = await contract.retrieve()
    console.log(`CurrentFavoriteNumber: ${currentFavoriteNumber.toString()}`)

    const transactionResponse = await contract.store("7")
    const transactionReceipt = await transactionResponse.wait(1)
    const updatedFavoriteNumber = await contract.retrieve()
    console.log(`UpdatedFavoriteNumber: ${updatedFavoriteNumber.toString()}`)
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
