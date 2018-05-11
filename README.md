# eth-pebbles

Data and notes for Vijay's Ethereum Trie LSM Project


## Data Structures ##

Merkle (Hash) Trees
* Internal nodes labeled with the hash of its children's labels
* Leaf nodes labeled with the hash of corresponding data
* Top (Master) hash acquired from a trusted source, used to verify hash trees from non-trusted sources

Radix Trees
* Space-optimized tries: Only children nodes are merged with their parents
* PATRICIA Tree: radix = 2, Each bit of the key is compared individually, binary tree


## Sources ##
* [Light Client](https://github.com/ethereum/wiki/wiki/Light-client-protocol)
* [ETH Меrkle Patricia Trie Specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree)
* [Vitalik's Stateless Proposal](https://ethresear.ch/t/the-stateless-client-concept/172)
* [ETH Sharding Intro](https://github.com/ethereum/sharding/blob/develop/docs/doc.md)
* [Account R/W Lists](https://ethresear.ch/t/account-read-write-lists/285)
* [Proof-of-Stake](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ)
* [Vitalik Proof-of-Stake](https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51)