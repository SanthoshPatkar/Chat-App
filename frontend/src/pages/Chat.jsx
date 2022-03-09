import React from 'react';
import {ChatState} from "../context/ChatProvider"
import { Box } from "@chakra-ui/react";
import SideDrawer from '../components/e_components/SideDrawer';
import MyChats  from '../components/e_components/MyChats';
import ChatBox from '../components/e_components/ChatBox';


const Chat = () => {
  const  user  = ChatState();
  // console.log(user);
  return (
    <div>
     {user && <SideDrawer/>}
    <Box
    d='flex'
    w='100%'
    justifyContent='space-between'
    h='90vh'
    p='10px'

    >
      { user && <MyChats />} 
      {user && <ChatBox/>}
    </Box>
    </div>
  )
}

export default Chat
