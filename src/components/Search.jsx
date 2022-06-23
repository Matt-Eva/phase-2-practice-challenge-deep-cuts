import React, {useState} from 'react'

function Search({handleChange}) {
  // will want to use filter method
  // const [trackSearch, setTrackSearch] = useState('')

  // console.log(trackSearch)

  // function filterSearch() {
  //   setTracks([...tracks].filter(track => {
  //     return track.title.toLowerCase().includes(trackSearch.toLowerCase())
  //   }))
  // }

  

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleChange}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search