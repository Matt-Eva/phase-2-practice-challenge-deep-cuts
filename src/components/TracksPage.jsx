import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

const URL = 'http://localhost:8001/tracks'

function TracksPage() {

  const [tracks, setTracks] = useState([])
  const [trackSearch, setTrackSearch] = useState('')

  const filteredTracks = tracks.filter(track =>{
    return track.title.toLowerCase().includes(trackSearch.toLowerCase())
  })
  
  // console.log(tracks)
  console.log(trackSearch)

  useEffect(()=>{
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setTracks(data)
    })
  }, [])

  function newTrack(addTrack){
    setTracks([...tracks, addTrack])
  }

  function handleChange(e) {
    setTrackSearch(e.target.value)
  }
    
  return (
    <div>
      <Search handleChange={handleChange}/>
      <AddTrackForm newTrack={newTrack}/>
      <TracksList tracks={filteredTracks} />
    </div>
  )
}

export default TracksPage