pragma solidity >0.7.0;

contract Converter {

    function convert(uint _num) public pure returns (string memory) {
        bytes memory map = '0000KKKMMMGGGTTTPPPEEEZZZYYY';
        uint8 len;
        
        uint i = _num; // Calculate the length of the input number
        while (i != 0){
            len++;
            i /= 10;
        }
        
        bytes1 char = map[len]; // Get the prefix code letter
        
        uint8 charPos = len > 3 ? ((len - 1) % 3) + 1 : 0; // Position of prefix (or 0 if the number is 3 digits or less) 

        // Gets the leftmost 4 digits from input number or just take the number as is if it's already 4 digits of less
        uint firstFour = len > 3 ? _num / 10 ** (len - 4) : _num;

        bytes memory bStr = "00000";
        // We start from index 4 ^ of zero-string and go left
        uint index = 4;

        while(firstFour != 0) {
            // If index is on prefix position - insert a prefix and decrease index
            if(index == charPos) bStr[index--] = char;
            bStr[index--] = bytes1(uint8(48 + (firstFour % 10)));
            firstFour /= 10;
        }
        return string(bStr);
    }

}
