import React from 'react'
import { Button,Icon  } from 'antd'
import leftNavBack from '../../assets/navleft.jpg'
import style from './homepage.css'


function HomePage(props){
        return (
            <div>
                <img className='leftNavImg' src={leftNavBack} />
                <div>
                    <h1>LanMch's Blog</h1>
                    <h3>---------</h3>
                    <h3>a so cute web coder</h3>
                </div>
                <div>
                <Button ghost>Default</Button>
                <Button ghost>Default</Button>
                </div>
                
            </div> 
              
            
        )

}

export default HomePage;