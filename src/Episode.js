import React from 'react'


const Episode = props => {
  const { episode, url, watchLocationState, setWatchLocation } = props

  const isWatched = +watchLocationState === episode
//   const isNext = showData[showData.findIndex((ep) => ep.episode === episode) + 1].episode === episode

  return (
    <div
      style={{
        opacity: isWatched && '.8',
        backgroundColor: isWatched && 'gray',
        height: '100px',
        border: '5px solid black',
        margin: '5px 0px',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}
    >
      <div>
     
          Naruto Shippuden Episode {episode}
     </div>
      <a
        onClick={() => setWatchLocation(episode)}
        style={{
          width: '100px',
          backgroundColor: isWatched ? '#B43A12': 'green',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white'
        }}
        href={url}
      >
        <div>
            { 
            isWatched ? 'Watched' : `Watch ep. ${episode}` 
            }
        </div>
      </a>
    </div>
  )
}

export default Episode
