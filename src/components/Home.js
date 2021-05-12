import React from 'react'

function Home() {
    return (
        <div className = "homeContainer">
              <h1 id = "homeTitle">NBA Player Comparator</h1>
              <p id = "homeDescription">A place to compare 3 offensive and/or defensive stats for any 3 CURRENT NBA players of your choice.</p>
              <button type="button" onClick= {handleChange} id="getStartedButton">Get Started</button>
        </div>
    )
}
function handleChange(e) {
    
}
export default Home;
