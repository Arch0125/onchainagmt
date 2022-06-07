import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import CreateAgmt from './CreateAgmt';
import MyAgmt from './MyAgmt';

function App() {

  useEffect(()=>{
    
  })

  const[account,setAccount]=useState('');
  const[provider,setProvider]=useState('');
  const[signer,setSigner]=useState(null);

  const connectWallet = async() =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    const addr = await signer.getAddress()
    setAccount(addr)
    setProvider(provider)
    setSigner(signer);
  }

  return (
    <Flex bgColor={"white"} width={'100vw'} height={"100vh"} flex={"1"} alignItems={'center'} flexDirection={"column"}>     
        <Text color={"blueviolet"} fontWeight={"bold"} fontSize={"4xl"} pt={"5vh"} >Agreement Signer</Text>
        <Divider/>
        <Box>
          
        <Button onClick={connectWallet} mt={"5vh"} variant={"solid"} colorScheme={"purple"} >
          {
            account.length >0 ?account:`Connect Wallet`
          }
        </Button>
        </Box>
        <Flex flex={"1"} flexDirection={"row"} mt={"30px"} mb={"10px"} >
            <Box flex={"1"} flexDirection={"column"} alignItems={"center"} padding={"50px"} height={"100vh"} width={"50vw"} bgColor={"white"} >
              <CreateAgmt/>
              <MyAgmt/>
            </Box>
            <Box height={"100vh"} width={"50vw"} bgColor={"blue"}>

            </Box>
        </Flex>
    </Flex>
  );
}

export default App;
