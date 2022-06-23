import React, {useState} from 'react'

function AddTrackForm({newTrack}) {

  // created addTrack to add a single track
  // we want addTrack to keep track of image, title, artist, and bpm
  // information about image, title, artist, and bpm will be coming from form inputs
  const [addTrack, setAddTrack] = useState({
    image: '', 
    title: '',
    artist: '',
    BPM: ''
  })

  // console.log(addTrack)

  // The purpose of this function is to update the state (addTrack)
  // It will update the state to whatever the user input is
  function handleChange(e){

    setAddTrack({...addTrack, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    newTrack(addTrack)
    fetch('http://localhost:8001/tracks', {
      method: "POST",
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(addTrack)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
  

  return (
      <form onSubmit={handleSubmit}>
        <div onChange={handleChange}>
          <input value={addTrack.image} type="text" name="image" placeholder="Image URL"/>
          <input value={addTrack.title} type="text" name="title" placeholder="title" />
          <input value={addTrack.artist} type="text" name="artist" placeholder="Artist" />
          <input value={addTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm