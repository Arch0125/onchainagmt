pragma solidity ^0.8.0;

contract Agreement{

    address lender;
    address tenant;
    uint agmtcount=0;

    struct Agmt{
        uint agmtid;
        address lender;
        address tenant;
        string amount;
        string duration;
        string productid;
        string document;
        string status;
    }

    event AgreementCreated(
        uint agmtid,
        address lender,
        address tenant,
        string amount,
        string duration,
        string productid,
        string document,
        string status
    );

    event AgreementSigned(
        string status
    );

    mapping(uint => Agmt) public agreements;

    function addAgreement(address _tenant, string memory _amount, string memory _duration, string memory _productid, string memory _document) public {
        ++agmtcount;
        agreements[agmtcount] = Agmt(agmtcount, msg.sender,_tenant,_amount,_duration,_productid,_document,'Not Signed');
        emit AgreementCreated(agmtcount, msg.sender,_tenant,_amount,_duration,_productid,_document,'Not Signed');
    }

    function signAgreement(uint key)public{
        address currenttenant = agreements[key].tenant;
        require(msg.sender == currenttenant);
        agreements[key].status='Signed';
        emit AgreementSigned('Signed');
    }

    function getAgreements(uint key)public view returns(Agmt memory){
        return agreements[key];
    }

    function getCount() public view returns(uint){
        return agmtcount;
    }

}