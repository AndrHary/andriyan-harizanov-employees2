import React, { useState } from 'react'
import './style.css'
function App() {
    const [days, setDays] = useState(0)
    return (
        <section id="home">
            <div class="title-box">
                <h1>Tandems</h1>
                <h2>Find the pair of employees who have worked as tandem for the longest amount of time.</h2>
            </div>
            <div class="file-selection">
                <h3>Choose file from here </h3>
                <div class="input-container">
                    <label for="files"><i class="fas fa-folder-plus"></i></label>
                    <input type="file" id="fileInput" name="files" />
                </div>
            </div>
            <div id="wrapper"></div>
        </section>
    )
}

export default App
