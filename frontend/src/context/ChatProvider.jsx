import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext=createContext();

const ChatProvider = ({ Children }) => {
    const [user,setUser]=useState();
    
    const history=useHistory();
    useEffect(() => {
      const userInfo=JSON.parse(localStorage.getItem('userInfo'));

      setUser(userInfo);

      if(!userInfo)
      {
          history.push('/');
      }
      
    }, [history])
    

    return (<ChatContext.Provider value={{user,setUser,}}>{Children}</ChatContext.Provider>
    );
};

export const ChatState = () =>{
    return useContext(ChatContext);
}
// console.log(ChatState);
export default ChatProvider;