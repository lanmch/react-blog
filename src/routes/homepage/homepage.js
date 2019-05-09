import React from 'react'
import Navleft from '../../components/navleft/navleft'
import { List,  Icon } from 'antd';
require('./homepage.css')

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '/article?id=5',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function HomePage(props){
        return (
            <div className='homepage'>
                <Navleft></Navleft>
                <List className='articleList' itemLayout="vertical" size="large"
                    pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 5,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                        
                    >
                        <List.Item.Meta
                        
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                        />
                        {item.content}
                    </List.Item>
                    )}
                />
            </div>     
        )
}

export default HomePage;