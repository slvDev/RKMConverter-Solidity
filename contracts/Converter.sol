pragma solidity >0.7.0;

contract Converter {

    function convert(uint _num) public pure returns (string memory) {
        bytes memory map = '0000KKKMMMGGGTTTPPPEEEZZZY';
        uint8 len;
        // Calculate the length of the input number
        uint i = _num;
        while (i != 0){
            len++;
            i /= 10;
        }
        // Gets prefix Symbol
        bytes1 char = map[len];
        // Calculate position of symbol
        uint8 charPos = len > 3 ? ((len - 1) % 3) + 1 : 0;
        // Gets the first 4 number from input or leave as is if the number less than 1000
        uint firstFour = len > 3 ? _num / 10 ** (len - 4) : _num;
        bytes memory bStr = "00000";
        uint k = 4;
        while(firstFour != 0) {
            // If symbol position is equal k, stores symbol in bytes and decrease k
            if(k == charPos && len > 3) bStr[k--] = char;
            bStr[k--] = bytes1(uint8(48 + (firstFour % 10)));
            firstFour /= 10;
        }
        return string(bStr);
    }

}
