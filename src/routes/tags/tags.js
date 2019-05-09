import React from 'react'
import Navleft from '../../components/navleft/navleft'

require('./tags.css')
var href = 'www.baidu.com'
function tags(props){
    return(
        <div className='tags'>
            <Navleft></Navleft>
            <div className='tagsdetail'>
                <div>
                    <a href={href}>HTML</a>
                    <a href={href} className='tagAes'>CSS</a>
                    <a href={href}>JavaScript</a>
                    <a href={href}>vue</a>
                    <a href={href}>react</a>
                    <a href={href}>redux</a>
                    <a href={href} className='tagAes'>mongoDB</a>
                    <a href={href}>HTTP</a>
                    <a href={href}>leetcode</a>
                    <a href={href} className='tagAes'>node</a>
                    <a href={href}>antd</a>
                </div>
            </div>
        </div>
    )
}

export default tags;