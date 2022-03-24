import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../../context/ChatProvider";
import { getSender, getSenderFull } from "../../context/ChatExpo"
import UpdateGroupChat from "./UpdateGroupChat";
import ReceiverProfile from "./ReceiverProfile";
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat, setSelectedChat, user } = ChatState();
  return <>
  {selectedChat ? (
      <>
       <Text 
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            d="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon/>}
              onClick={() => setSelectedChat("")}
            />
            {
              (!selectedChat.isGroupChat ? (
                <>
                  {getSender(user, selectedChat.users)}
                  <ReceiverProfile
                    user={getSenderFull(user, selectedChat.users)}
                  />
                </>
              ) : (
                <>
                  {selectedChat.chatName.toUpperCase()}
                   <UpdateGroupChat
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
                </>
              ))}
          </Text>
          <Box
           d="flex"
           flexDir="column"
           justifyContent="flex-end"
           p={3}
           bg="#E8E8E8"
           w="100%"
           h="100%"
           borderRadius="lg"
           overflowY="hidden"
          >
          hagag
          </Box>
      </>
      ) : (
        <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
  </>
};

export default SingleChat;