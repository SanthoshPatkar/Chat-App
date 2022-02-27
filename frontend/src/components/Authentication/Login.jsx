import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";


const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
    const handleClick = () => setShow(!show);
    const handleSubmit=() => {
  
    }
    return (
      <VStack spacing={"5px"}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button colorScheme='cyan' variant='outline' onClick={handleSubmit}>
            Login
        </Button>
      </VStack>
    );
}

export default Login