import React from 'react'
import { useState } from 'react'
import { Grid } from 'gridjs-react'
import changeHandler from './changeHandler'
import './style.css'
function App() {
    let [tandemArr, setTandemArr] = useState([])
    let [hint, setHint] = useState(false)
    return (
        <section id="home">
            <div className="title-box">
                <h1>Tandems</h1>
                <h2>Find the pair of employees who have worked as tandem for the longest amount of time.</h2>
            </div>
            <div className="file-selection">
                <h3>Choose file from here </h3>
                <div className="input-container">
                    <label htmlFor="files"><i className="fas fa-folder-plus"></i></label>
                    <input type="file" id="fileInput" name="files" onChange={(e) => changeHandler(e, setTandemArr)} />
                </div>
            </div>
            <div id="wrapper"></div>
            {tandemArr[0]
                ? <Grid data={[tandemArr]} columns={['Employee1', 'Employee2', 'ProjectId', 'DaysAsTandem']} />
                : null}
            <div className='star'
                onMouseEnter={() => setHint(true)}
                onMouseOut={() => setHint(false)}><i class="fas fa-star-half-alt"></i></div>
            {hint !== false
                ? <div className='hint'>
                    <p>To break the record the tandem must have worked more days then the current record holder. If the days are equal or less, the current record holder tandem stays on the top place. The job leaving day is not count as a worked day.</p>
                </div>
                : null}
        </section>
    )
}

export default App
