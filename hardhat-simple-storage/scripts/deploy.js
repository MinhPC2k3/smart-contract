//import
const {ethers} = require("hardhat")
//async main 
async function main(){
  const SimpleTransaction = await ethers.getContractFactory(
    "SimpleTransaction",
    
  )
  const PriceConsumerV3 =await ethers.getContractFactory(
    "PriceConsumerV3",
  )
  const connectChainLink = await PriceConsumerV3.deploy()
  await connectChainLink.deployed()
  var etherAccount1Deposit = 5;
  var etherAccount1Deposit1 = 10;
  // var MyMoney = { value: ethers.utils.parseEther(etherAccount1Deposit.toString()) };
  var [account0, account1, account2, account3 , account4, account9] = await ethers.getSigners();
  console.log("Deplying contract..")
  const simpleTransaction = await SimpleTransaction.deploy()
  await simpleTransaction.deployed()
  // const priceConsumerV3 = await PriceConsumerV3.deploy()
  // await priceConsumerV3.deployed()
  // const PriceFeed = await priceConsumerV3.getLatestPrice()
  // console.log(`${priceConsumerV3}`)
  console.log(`Deploy contract to: ${simpleTransaction.address}`)
  const BeforeTransfer = await simpleTransaction.CheckAccount(account1.address)
  console.log(`Send Account Before ${BeforeTransfer}`)
  // const ReceiveAccountMoneyBefore = await simpleTransaction.CheckAccount(account2.address)
  // console.log(`Receive Account Before ${ReceiveAccountMoneyBefore}`)
  // const ReceiveAccountMoneyBefore1 = await simpleTransaction.CheckAccount(account3.address)
  // console.log(`Receive Account Before1 ${ReceiveAccountMoneyBefore1}`)
  // await simpleTransaction.deposit(10,value:10)
  await simpleTransaction.deposit(account0.address,{ value: ethers.utils.parseEther(etherAccount1Deposit1.toString()) });
  // const currentValue1 = await simpleTransaction.Retrieve()
  // console.log(`Current Value in smart contract is: ${currentValue1}`)
  // await simpleTransaction.connect(account1).deposit(account1.address,{ value: ethers.utils.parseEther(etherAccount1Deposit.toString()) });
  const currentValue2 = await simpleTransaction.Retrieve()
  console.log(`Current Value in smart contract is: ${currentValue2}`)
  await simpleTransaction.connect(account1).deposit(account1.address,{ value: ethers.utils.parseEther(etherAccount1Deposit.toString()) });
  const SendedMoney = await simpleTransaction.connect(account1).ReturnAmountMoney(account1.address)
  console.log(`Money Sended by account 1 ${SendedMoney}`)
  await simpleTransaction.connect(account1).withdraw(account1.address)
  // await simpleTransaction.connect(account3).withdraw()

  // const ReceiveAccountMoneyAfter = await simpleTransaction.CheckAccount(account1.address)
  // console.log(`Recieve Account After ${ReceiveAccountMoneyAfter}`)
  // const ReceiveAccountMoneyAfter1 = await simpleTransaction.CheckAccount(account3.address)
  // console.log(`Recieve Account After1 ${ReceiveAccountMoneyAfter}`)
  const currentValue = await simpleTransaction.Retrieve()
  const currentAccountValue = await simpleTransaction.CheckAccount(account1.address)
  console.log(`Current Value in smart contract is: ${currentValue}`)
  console.log(`Send Account After ${currentAccountValue}`)
  // var [account0, account1, account2, account3] = await ethers.getSigners();
  // console.log(`Deploy contract to: ${connectChainLink.address}`)
  // const Money = await connectChainLink.getLatestPrice()
  // console.log(`${Money}`)
}

//main
main()
  .then(()=> process.exit(0))
  .catch((error)=>{
  console.error(error);
  process.exit(1);
})
//10000000000000000000000
//10004999876560950865702
//10000000000000000000
//9994999925505416439206
//0xa0Ee7A142d267C1f36714E4a8F75612F20a79720