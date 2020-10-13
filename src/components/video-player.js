import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const ResponsiveWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  & .player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const VideoPlayer = ({ url }) => {
  return (
    <ResponsiveWrapper>
      <ReactPlayer
        className="player"
        url={ url }
        width='100%'
        height='100%'
      />

    </ResponsiveWrapper>
  )  
}
