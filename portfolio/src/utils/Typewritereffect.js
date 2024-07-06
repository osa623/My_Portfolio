import React from 'react'
import Typewriter from 'typewriter-effect';

const Typewritereffect = () => {
  return (
    <div className="text-3xl text-center text-primary font-kanit">
      <Typewriter
        options={{
          strings: [
            'Content Creator',
            'Video Editor',
            'Automobile Enthusiast'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          cursor:'|'
        }}
      />
    </div>
  )
}

export default Typewritereffect
