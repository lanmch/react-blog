import React from 'react'
import Navleft from '../../components/navleft/navleft'
import Timelist from '../../components/timeList/timeList'

require('./pigeonhole.css')

function PigeonHole(props){
    return(
        <div className='pigeonhole'>
            <Navleft></Navleft>
            <div className='timeNode'>
                <Timelist></Timelist>
            </div>
        </div>
    )
}

export default PigeonHole;