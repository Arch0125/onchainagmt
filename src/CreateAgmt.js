import { Box, Button, Divider, Input, Text } from '@chakra-ui/react';
import { InputGroup,InputLeftAddon } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from './component/ContractABI';

const CreateAgmt=()=>{

    useEffect(()=>{
        connectWallet()        
    },[])

    const[account,setAccount]=useState('');
    const[provider,setProvider]=useState('');
    const[signer,setSigner]=useState(null);
    const[tenant,setTenant]=useState('');
    const[amount,setAmount]=useState(0);
    const[duration,setDuration]=useState('');
    const[productid,setProductid]=useState('');
    const[ipfshash,setIpfshash]=useState('');
    
    
    const connectWallet = async() =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const addr = await signer.getAddress()
        setAccount(addr)
        setProvider(provider)
        setSigner(signer);
    }
    
    const AgmtInterface = new ethers.Contract('0xA5f6E9686c2AC3EDf7628179901462c875EC5281',contractABI,signer);     
    
    const addAgmt=()=>{
        AgmtInterface.addAgreement(tenant,amount,duration,productid,ipfshash);
    }

    return(
        <Box textAlign={"center"} padding={"20px"} borderColor={"blueviolet"} bgColor={"white"} borderWidth={"2px"} rounded={"2xl"} width={"97%"} height={"fit-content"} >
            <Text fontSize={"20px"} color={"blueviolet"} fontWeight={"bold"} >Add Agreement</Text>
            <Divider/>
            <InputGroup mt={"10px"} >
            <InputLeftAddon children='Tenant Address' />
            <Input onChange={(e)=>setTenant(e.target.value)} placeholder='0x0...' color={"blackAlpha.600"} borderColor={"blackAlpha.200"} />
            </InputGroup>

            <InputGroup mt={"10px"} >
            <InputLeftAddon children='Amount' />
            <Input onChange={(e)=>setAmount(e.target.value)} placeholder='Rs.' color={"blackAlpha.600"} borderColor={"blackAlpha.200"} />
            </InputGroup>

            <InputGroup mt={"10px"} >
            <InputLeftAddon children='Duration' />
            <Input onChange={(e)=>setDuration(e.target.value)} placeholder='eg. 3 months' color={"blackAlpha.600"} borderColor={"blackAlpha.200"} />
            </InputGroup>

            <InputGroup mt={"10px"} >
            <InputLeftAddon children='Product ID' />
            <Input onChange={(e)=>setProductid(e.target.value)} placeholder='' color={"blackAlpha.600"} borderColor={"blackAlpha.200"} />
            </InputGroup>

            <InputGroup mt={"10px"} >
            <InputLeftAddon children='Document IPFS Hash' />
            <Input onChange={(e)=>setIpfshash(e.target.value)} placeholder='' color={"blackAlpha.600"} borderColor={"blackAlpha.200"} />
            </InputGroup>

            <Button onClick={addAgmt} mt={"20px"} colorScheme={"purple"} >Create Agreement</Button>
        </Box>
    )
}

export default CreateAgmt