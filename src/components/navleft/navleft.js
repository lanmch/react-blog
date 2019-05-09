import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
import leftNavBack from '../../assets/navleft.jpg'

require('./navleft.css')

class navleft extends Component{
        render(){
            return (
                <div className='whole'>
                    <img className='leftNavImg' src={leftNavBack} alt=''/>
                    <div className='navDetail'>
                        <div className='title'>
                            <h1>LanMch's Blog</h1>
                            <h3>a so cute web coder</h3>
                        </div>
                        <div>
                            <div><NavLink to='/'><Button type="dashed" ghost shape="round" icon='home'>首页</Button></NavLink>
                            <NavLink to='/tags'><Button type="dashed" ghost shape="round" icon='tags'>标签</Button></NavLink></div>
                            <div><NavLink to='/pigeonhole'><Button type="dashed" ghost shape="round" icon='paper-clip'>归档</Button></NavLink>
                            <NavLink to='/aboutme'><Button type="dashed" ghost shape="round" icon='user'>关于</Button></NavLink></div>
                        </div>
                    </div>
                </div> 
                  
                
            )
        }

}

export default navleft;