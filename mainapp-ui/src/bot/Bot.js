import React, { useState } from 'react'
import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit'
import { ActionProvider } from './ActionProvider'
import { MessageParser } from './MessageParser'
import config from './config'

import './Bot.css'

export const Bot = () => {
    const [isBotOpen, setIsBotOpen] = useState([])

    const handleOpenBot = () => {
        if (isBotOpen === false) {
            setIsBotOpen(true)
        } else {
            setIsBotOpen(false)
        }
    }

    const loadMessages = () => {
        if (localStorage.getItem('chat_messages')) {
            const messages = JSON.parse(localStorage.getItem("chat_messages"))
            return messages.history
        }
    }

    return (
        <div className='appChatBotContainer' >
            <button onClick={handleOpenBot} className='appChatbotButton' label='bot'>
                bot
            </button>
            {
                (isBotOpen === true) && (
                    <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageHistory={loadMessages()}
                        messageParser={MessageParser}
                        placeholderText='Напиши чего надо' />
                )
            }
        </div>
    )
}