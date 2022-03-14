import React from 'react';
import {
    Button,
    IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
  } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons';

function ProfileModel({user,children}) {

  console.log(user);
    const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
        {
            children?(<span onClick={onOpen}>{children}</span>):(
                <IconButton 
                d={{base:"flex"}}
                icon={<ViewIcon/>}
                onClick={onOpen} />
            )
        }
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
          fontSize='25px'
          fontFamily='Work sans'
          d='flex'
          justifyContent='center'
          >
            {user}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              {/* <Image
              borderRadius='full'
              boxSize='100px'
              s
              alt={user.data}
              /> */}
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