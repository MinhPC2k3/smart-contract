// pragma solidity 0.8.8;

// // pragma solidity ^0.8.0;
// // pragma solidity >=0.8.0 <0.9.0;

// contract SimpleStorage {
//   uint256 favoriteNumber=9;

//   struct People {
//     uint256 favoriteNumber;
//     string name;
//   }

//   // uint256[] public anArray;
//   People[] public people;

//   mapping(string => uint256) public nameToFavoriteNumber;
//   function store(uint256 _favoriteNumber) public {
//     favoriteNumber = _favoriteNumber;
//   }

//   function retrieve() public view returns (uint256) {
//     return favoriteNumber;
//   }

//   function addPerson(string memory _name, uint256 _favoriteNumber) public {
//     people.push(People(_favoriteNumber, _name));
//     nameToFavoriteNumber[_name] = _favoriteNumber;
//   }
// }
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
import "hardhat/console.sol";

contract SimpleTransaction{
    mapping(address => uint256) public LinkAddressToMoney;
    uint256 percent = 2;
    address metaMaskAccount = 0xAf15c42743311DEe6cC01aF7E464c44A44dF62f3;
    function deposit(address _AccountAddress) payable public {
        // TODO do something then
        require(msg.value>0);
        LinkAddressToMoney[_AccountAddress]=msg.value;
    }
    function ReturnAmountMoney (address _AccountAddress) public view returns (uint256){
      return LinkAddressToMoney[_AccountAddress];
    }
    // function withdraw(address _ReceiveMoneyAccount) public {
    //     msg.sender.transfer(_ReceiveAccount.transfer());
    // }
    function withdraw(address _AccountAddress) public {
      uint256 _AmountMoneySendBack = LinkAddressToMoney[_AccountAddress]*2;
      payable(msg.sender).transfer(_AmountMoneySendBack);
      
    }
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    function Retrieve () public view returns (uint256){
      return address(this).balance;
    }
    function CheckAccount (address _ReceiveAccount) public view returns (uint256){
      return _ReceiveAccount.balance;
    }
}