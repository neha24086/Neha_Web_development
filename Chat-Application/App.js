import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    
    <ChatEngine

    height = "100vh"
    projectID= "1e8cf6f3-7429-4781-a10d-940022688185"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    
  />
  )
}

export default App;