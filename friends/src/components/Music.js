
import React from 'react'

const Music = () => {
        let audio = new Audio("../Audio/RuneScapeTheme.mp3")
      
        const start = () => {
          audio.play()
        }
      
        return (
          < div >
            <button onClick={start}>Play</button>
          </div >
        );
}

export default Music;