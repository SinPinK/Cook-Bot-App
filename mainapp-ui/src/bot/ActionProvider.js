import React from 'react'

export const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {},
        })
      })}
    </div>
  )
}

//export default ActionProvider