import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext=createContext();

const ChatProvider=({children})=>{
const [user, setUser] = useState();
const history = useHistory();

useEffect(() => {

       const userInfo = JSON.parse(localStorage.getItem("userInfo"));
       setUser(userInfo);
      // console.log(userInfo)
       if (userInfo)
       {
        history.push("/chat");
       }
       else
       {
        history.push("/");
       }        
  }, [history]);

    return <ChatContext.Provider value={{user,setUser}}>
        {children}
    </ChatContext.Provider>
 }

 export const ChatState =()=> {
  // console.log(`hii ${useContext(ChatContext)}`);
 return (useContext(ChatContext)); 
 }

 export default ChatProvider;