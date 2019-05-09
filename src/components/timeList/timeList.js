import React, { Component } from 'react'
import { Timeline, Icon } from 'antd'


require('./timeList.css')

class timeList extends Component{
        render(){
            return (
                <Timeline pending="to be continued...">
                    <Timeline.Item dot={<Icon type="sync" style={{ fontSize: '20px' }} />} color="red">共计n篇文章</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">2019-5</Timeline.Item>
                    <Timeline.Item>react native学习心路历程</Timeline.Item>
                    <Timeline.Item>react + redux巧妙结合使用心得</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">2019-6</Timeline.Item>
                    <Timeline.Item>解锁leetcode常见方法</Timeline.Item>
                    <Timeline.Item>解决跨域的九种姿势</Timeline.Item>
                    <Timeline.Item>常见es6知识点</Timeline.Item>
                </Timeline>
            )
        }

}

export default timeList;









