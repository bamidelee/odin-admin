import SignOn from './components/signOn';
import { useState, useEffect, useRef } from 'react';
import { useApolloClient } from '@apollo/client';
import Upload from './components/upload';
import useMouse from '@react-hook/mouse-position'
import Header from './components/header'
import './App.css';

function App() {

  const [token, setToken] = useState('')
  const client = useApolloClient()
  const ref = useRef(null)
  const mouse = useMouse(ref.current, {
    enterDelay: 100,
    leaveDelay: 100,
  })


  useEffect(()=> {
    if(token){
      localStorage.setItem('token', token)
    }
  }, [token])

  useEffect(() => {
    const TOKEN = localStorage.getItem('token')

    if(TOKEN){
      setToken(TOKEN)
    }
  }, [])

  const logout = () => {
    localStorage.clear()
    client.resetStore()
    setToken('')
  }

  if(!token){
    return (
      <div>
        <SignOn setToken = {setToken}/>
      </div>
    )
  }

  return(
    <div className='App' ref={ref}>
      <Header mouseX = {mouse.x}/>
      <Upload/>
      <button className='logOut' onClick={()=> logout()}>Log out</button>
    </div>
  )
}

export default App;
