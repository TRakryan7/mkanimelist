"use client"

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen,setIsOpen]= useState(true)

    const handlerVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handlerVideoPlayer} className="text-primary float-right  bg-secondary px-3 mb-1">X</button>
                <YouTube 
                    videoId={youtubeId} 
                    onReady={(e)=> e.target.pauseVideo}
                    opts={option}
                />
             </div>
        )
    }

    const OpenPlayer = () => {
        return(
            <button 
                onClick={handlerVideoPlayer} 
                className="fixed bottom-5 right-5 w-32 bg-primary text-dark hover:bg-accent hover:text-dark rounded">
                    Tonton Trailer
            </button>
        )
    }
    const option = {
        width:'300',
        height:'250'
    }
    return isOpen ? <Player/> : <OpenPlayer/>
                
}
 
export default VideoPlayer;