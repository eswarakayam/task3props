import React from 'react'

function YoutubeComponent({imageUrl, title, noofview, time}) {
  return (
    <div>
      <img src = {imageUrl} alt = {title}/>
        <h4>{title} </h4>
        <div>
            <span>{noofview}</span> <span> {time} </span>
        </div>
    </div>
  )
}

export default YoutubeComponent
