import React,{Component} from 'react'
import Navleft from '../../components/navleft/navleft'

import { Card, Icon } from 'antd';
import myavatar from '../../assets/me.png'
const { Meta } = Card;
require('./aboutme.css')

class Aboutme extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifShowConcact: '',
            concactImg: '../../assets/myconcact/qq.jpg'
        }
    }
    showConcact = (tags) =>{
        this.setState({
            ifShowConcact: 'personcontact',
            
        });

    }
    hideConcact = () =>{
        setTimeout(()=>{
            this.setState({
                ifShowConcact: ''
            })
        },300)
    }
    render(){
        return(
            <div className='aboutme'>
                <Navleft></Navleft>
                <div className='persondetail'>
                    <Card 
                        hoverable
                        style={{ width: 400 }}
                        cover={<img alt="example" src={myavatar} />}
                        actions={[<Icon style={{fontSize: 28, color: '#68A5E1'}} type="qq" onMouseEnter={this.showConcact.bind(this,'qq')} onMouseLeave={this.hideConcact.bind(this)}/>, <Icon style={{fontSize: 28, color: '#8DC81B'}} type="wechat" onMouseEnter={this.showConcact.bind(this,'wechat')} onMouseLeave={this.hideConcact.bind(this)}/>, <Icon style={{fontSize: 28, color: '#040404'}} type="github" onMouseEnter={this.showConcact.bind(this,'git')} onMouseLeave={this.hideConcact.bind(this)}/>, <Icon theme="filled" style={{fontSize: 28, color: '#708A97'}} type='mail' onMouseEnter={this.showConcact.bind(this,'mail')} onMouseLeave={this.hideConcact.bind(this)}/>]}
                    >
                        <Meta
                        className='mycard-text'
                        title="Lan Mingcheng from CQUPT"
                        description="A stupid but studious web coder"
                        />
                    </Card>
                    <div className={this.state.ifShowConcact}>
                        <img src={ this.state.concactImg } alt='二维码已过期'/>
                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Aboutme;