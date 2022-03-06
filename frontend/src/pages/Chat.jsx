import React from "react";
import { ChatState } from "../context/ChatProvider";
import sideDrawer from "../components/e_components/sideDrawer";
import { Box } from "@chakra-ui/react";

function Chat() {
  const { user } = ChatState();
  return (
    <div>
      {user && <sideDrawer />}
      <Box>
        {/* {user && <myChats/>} */}
        {/* {user && <chatBox/>} */}
      </Box>
    </div>
  );
}

export default Chat;
