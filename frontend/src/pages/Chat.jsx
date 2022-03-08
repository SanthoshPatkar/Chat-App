import React from 'react';
import {ChatState} from "../context/ChatProvider"
import { Box } from "@chakra-ui/react";
import SideDrawer from '../components/e_components/SideDrawer';
import MyChats  from '../components/e_components/MyChats';


const Chat = () => {
  const  user  = ChatState();
  console.log(user);
  return (
    <div>
   <SideDrawer/>
    <Box>
     <MyChats /> 
      {user && <chatBox/>}
    </Box>
    </div>
  )
}

export default Chat
