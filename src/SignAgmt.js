import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import { ethers } from 'ethers';
import contractABI from './component/ContractABI';
import { useState,useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

const SignAgmt =()=>{

    const[account,setAccount]=useState('');
    const[provider,setProvider]=useState('');
    const[signer,setSigner]=useState(null);
    const[agmts,setAgmts]=useState([]);

    useEffect(()=>{
        connectWallet();
        showAgmt();
    },[])

    const connectWallet = async() =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const addr = await signer.getAddress()
        setAccount(addr)
        setProvider(provider)
        setSigner(signer);
    }

    const AgmtInterface = new ethers.Contract('0x8ea5E6f206848e8C16CB48943143a47e1CfE5E68',contractABI,signer);     

    const showAgmt = async()=>{
        var listcount = await AgmtInterface.getCount();
        var parselist = listcount.toString();
        console.log(parselist)
        setAgmts([]);
        for(let i =1;i<=parselist;i++){
            var agmt = await AgmtInterface.getAgreements(i);
            console.log(agmt.status)
            if((JSON.stringify(agmt.tenant) === JSON.stringify(account))&&(agmt.status != 'Signed')){
                setAgmts((agmts)=>[...agmts,agmt])
            }
        }
        console.log(agmts)
    }

    const signAgmt=async(index)=>{
       await AgmtInterface.signAgreement(index);
    }

    return(
        <Box  mb={"10px"} mt={"30px"} textAlign={"center"} padding={"20px"} borderColor={"blueviolet"} bgColor={"white"} borderWidth={"2px"} rounded={"2xl"} width={"97%"} height={"fit-content"} >
            <Text fontSize={"20px"} color={"blueviolet"} fontWeight={"bold"}>Agreements to Signed</Text>
            <Divider/>
            <Button variant={"solid"} colorScheme={"purple"} mt={"15px"} onClick={showAgmt} >Refresh List</Button>
            {
                Object.keys(agmts).map((agmt, index) => (
                    <Flex flex={"1"} flexDirection={"row"} width={"100%"} height={"fit-content"} padding={"20px"} bgColor={"gray.50"} mt={"15px"} rounded={"2xl"} borderWidth={"1.5px"} borderColor={"gray.100"} >
                        <Text>Agreement ID #{(agmts[index].agmtid).toString()}</Text>
                        <Box width={"50%"}>
                            <Text>Lender : {(agmts[index].lender).substring(0,7)}</Text>
                            <Text>Amount : {agmts[index].duration}</Text>
                        </Box>
                        <Box  >
                        <Text>Duration : {(agmts[index].duration)}</Text>
                        <Button onClick={() => signAgmt((agmts[index].agmtid).toString())} variant={"solid"} colorScheme={"purple"} mt={'5px'} >Sign Agreement</Button>
                        </Box>
                    </Flex>
                ))
            }
        </Box>
    )
}

export default SignAgmt