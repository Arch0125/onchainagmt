import { Flex,Box, Text, Divider } from '@chakra-ui/react';
import React from 'react';
import contractABI from './component/ContractABI';
import { ethers } from 'ethers';
import { useState,useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const MyAgmt =()=>{

    const[account,setAccount]=useState('');
    const[provider,setProvider]=useState('');
    const[signer,setSigner]=useState(null);
    const[agmts,setAgmts]=useState([]);

    useEffect(()=>{
        connectWallet();
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

    const AgmtInterface = new ethers.Contract('0xef8d70E08943c4081A84f522686052fAed287809',contractABI,signer);     

    const showAgmt = async()=>{
        var listcount = await AgmtInterface.getCount();
        var parselist = listcount.toString();
        console.log(parselist)
        setAgmts([]);
        for(let i =1;i<=parselist;i++){
            var agmt = await AgmtInterface.getAgreements(i);
            setAgmts((agmts)=>[...agmts,agmt])
        }
        console.log(agmts)
    }

    return(
        <Box mt={"30px"} textAlign={"center"} padding={"20px"} borderColor={"blueviolet"} bgColor={"white"} borderWidth={"2px"} rounded={"2xl"} width={"97%"} height={"fit-content"} >
            <Text  fontSize={"20px"} color={"blueviolet"} fontWeight={"bold"} >My Agreements</Text>
            <Divider/>
            <Button mt={"15px"} colorScheme={"purple"} variant={"solid"} onClick={showAgmt} >Refresh List</Button>
            {
                 Object.keys(agmts).map((agmt, index) => (
                    <Flex flex={"1"} flexDirection={"row"} width={"100%"} height={"fit-content"} padding={"20px"} bgColor={"gray.50"} mt={"15px"} rounded={"2xl"} borderWidth={"1.5px"} borderColor={"gray.100"} >
                        <Box width={"50%"}>
                            <Text>Tenant : {(agmts[index].tenant).substring(0,7)}</Text>
                            <Text>Amount : {agmts[index].duration}</Text>
                        </Box>
                        <Box  >
                        <Text>Duration : {(agmts[index].duration)}</Text>
                        <Text>Status : {agmts[index].status}</Text>
                        </Box>
                    </Flex>
                 ))
            }
        </Box>
    )
}

export default MyAgmt