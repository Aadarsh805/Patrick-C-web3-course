const ethers = require("ethers")
const fs = require("fs")
require("dotenv").config()

// typescript
// import {ethers} from 'ethers'
// import * as fs from "fs"
// import "dotenv/config"

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const encryptedJsonkey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    )
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonkey)
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
