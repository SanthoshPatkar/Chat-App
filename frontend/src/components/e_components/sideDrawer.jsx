import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip,useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ChatState } from '../../context/ChatProvider';
import ProfileModel from './ProfileModel';

function SideDrawer() {
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
const [loading, setLoading] = useState(false)
const [loadingChat, setLoadingChat] = useState();
const history=useHistory();
const toast = useToast()
//const user = JSON.parse(localStorage.getItem("userInfo"));
 const { user } = ChatState();
//console.log(user);

const logoutHandler=()=>{
  localStorage.removeItem("userInfo");
  history.push('/');
  toast({
    title: "Logout user",
    status:"info",
    duration: 2000,
    isClosable: true,
    position: "bottom",
  });
}

  return (
    <>
    <Box d='flex' justifyContent='space-between' alignItems='center' bg='white' w='100%' p='5px 10px' borderWidth='5px'>
      <Tooltip label="Search users to chat" hasArrow placement='bottom-end'>
      <Button variant='ghost' >
      <i className="fa-solid fa-magnifying-glass"></i>
      <Text d={{base:"none",md:'flex'}} px='4'>Search User</Text>
      </Button>
      </Tooltip>
      <Text fontSize='2xl' fontFamily='work sans'>
      Talk Master
      </Text>
      <div>
       <Menu>
         <MenuButton p='1'>
         <BellIcon fontSize='2xl'/>
         </MenuButton>
         <MenuList></MenuList>
       </Menu>
       <Menu>
       <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
        <Avatar size={'sm'} cursor='pointer'/>
         </MenuButton>
         <MenuList>
           <ProfileModel user={user}>
           <MenuItem>My Profile</MenuItem>
           </ProfileModel>
           <MenuDivider/>
           <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
         </MenuList>
       </Menu>
      </div>

    </Box>
    </>
  )
}

export default SideDrawer