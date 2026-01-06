import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

      function App () {
        return (
          <>
          <ChatInput />
          <ChatMessage 
            message='hello chatbot' 
            sender='user' 
          />
          <ChatMessage
            message='Hello! How can I help you?'
            sender='robot'
          />
          <ChatMessage
            message='can you get me todays date?'
            sender='user'
          />
          <ChatMessage
            message='Today is September 27'
            sender='robot'
          />
        </>
        )
      }

export default App
