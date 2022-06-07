import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { FileUpload } from 'react-ipfs-uploader';

const IPFSUpload =()=>{
    const [fileUrl, setFileUrl] = useState('')

    return (
        <Box mb={"10px"} mt={"30px"} textAlign={"center"} padding={"20px"} borderColor={"blueviolet"} bgColor={"white"} borderWidth={"2px"} rounded={"2xl"} width={"97%"} height={"fit-content"} >
            <Text  fontSize={"20px"} color={"blueviolet"} fontWeight={"bold"} >Document Upload</Text>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </Box>
    )
}

export default IPFSUpload