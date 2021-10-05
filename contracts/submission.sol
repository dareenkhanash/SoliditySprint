pragma solidity >=0.4.25 <0.7.0;

contract School {
    struct Student {
        string name;
        uint age;
    }

    // Declare a mapping of addresses to Students here called "students"

    // Also declare an array of addresses called "studentsAddresses"

    function getStudent(address _address) public view returns (string memory, uint) {
        // Your code here
    }

    function setStudent(address _address, string memory _name, uint _age) public {
        // Your code here
    }

    function getStudentCount() public view returns (uint) {
        // Your code here
    }
}

