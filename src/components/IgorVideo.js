import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

import MyVideo from '../assets/img/dogs/igorvid.mp4'

const IgorVideo = () => {
  return (
    <Video className='h-[515px] w-[290px]' Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
        <source src={MyVideo} type='video/webm' /> 
    </Video>
  )
}

export default IgorVideo