import { Box, Button, Menu, Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react'

function SideDrawer() {
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
const [loading, setLoading] = useState(false)
const [loadingChat, setLoadingChat] = useState()

  return (
    <>
    <Box d='flex' justifyContent='space-between' alignItems='center' bg='white' w='100%' p='5px 10px' borderWidth='5px'>
      <Tooltip label="Search users to chat" hasArrow placement='bottom-end'>
      <Button variant='ghost' >
      <i class="fa-solid fa-magnifying-glass"></i>
      <Text d={{base:"none",md:'flex'}} px='4'>Search User</Text>
      </Button>
      </Tooltip>
      <Text fontSize='2xl' fontFamily='work sans'>
      Talk Master
      </Text>
      <div>
       <Menu>

       </Menu>
      </div>

    </Box>
    </>
  )
}

export default SideDrawer