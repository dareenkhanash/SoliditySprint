
# Solidity Mappings

Mapping is a key-value data structure, like a map object in javascript or a dict in python 
it acts like hash table therefore, mapping enables to find the location corresponding to a given key 
in an efficient way.

Mappings are useful for any associations, and are usually used to associate unique Ethereum addresses with related values.

### Mapping representation in storage ###
Mappings are represented differently in storage than other variable types.

- The key data is not stored in a mapping, rathers its `keccak256` hash is used to look up the value.

<details>
  <summary>More about mapping representation in storage</summary>
  
When declaring a mapping, it occupies a slot in storage at some position (p). The slot itself is unused, 
but it is needed to create the hashing. The value corresponding to a mapping key k is located at keccak256(k . p) where `.` is concatenation. For the following example : 

```
mapping(_keyType => valueType) m; // stored at slot 1
m[key] = value;
```
If `keccak256(key, 1) =  0x123456…7890 (Hexadecimal number)`, then the value will be stored at slot number `0x123456…7890 (hexadecimal number)`                 
[For more explanation](https://docs.soliditylang.org/en/v0.8.0/internals/layout_in_storage.html#mappings-and-dynamic-arrays)

</details>

## Declaring ##
A mapping `m` is declared as: 

```
mapping(_KeyType => _ValueType) m; 
``` 
The `_KeyType` can be any built-in value type, bytes, string, or any contract or enum type. 
Other user-defined or complex types (such as mappings, structs, or array types) cannot be used as keys.
`_ValueType` can be any type at all- including mappings, arrays, and structs.

## Limitations ##
- Mappings cannot be used as return value for function.
- It is impossible to retrieve a list of values or keys (like you might do with an object in Javascript, for instance).
- Mappings do not have a length.
- You cannot iterate over mappings directly, though it is possible to implement a second data structure on top of
them and iterate over that. Check the [Official Docs](https://docs.soliditylang.org/en/v0.8.3/types.html#iterable-mappings) for more information.


## Examples ##
- Associating a unique Ethereum address to a specific balance:
```
  mapping (address => uint256) private balances;
```
- Manage and keep track which users / addresses are allowed to send ether to the contract:
```
  mapping(address => bool) allowedToSend;
```

_The example below demonstrates using a simple mapping called "balances"._

```solidity 
pragma solidity >=0.7.0 <0.9.0;

contract Accounts {
    mapping(address => uint) balances;

    function setBalance(address _address, uint _balance) public {
       balances[_address] = _balance;
    }

    function getBalance(address _address) view public returns (uint) {
        return balances[_address];
    }

    function deleteBalance(address _address) public {
        delete balances[_address];
    }
}
```
