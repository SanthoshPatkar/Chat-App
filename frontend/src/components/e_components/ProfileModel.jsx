import React from 'react';
import {
    Button,
    IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure
  } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons';

function ProfileModel({user,children}) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
        {
            children ? (<span onClick={onOpen}>{children}</span>):(
                <IconButton 
                d={{base:"flex"}}
                icon={<ViewIcon/>}
                onClick={onOpen} />
            )
        }
        <Modal size='lg' isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
          fontSize='25px'
          fontFamily='Work sans'
          d='flex'
          justifyContent='center'
          >
            {userInfo.data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          d="flex"
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          >
              <Image
              borderRadius='full'
              boxSize='150px'
              src={userInfo.data.dp}
              alt={userInfo.data.name}
               />
              <Text margin='5px 0'>
                Email: {userInfo.data.email}
              </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}

export default ProfileModel