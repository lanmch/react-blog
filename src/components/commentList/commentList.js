import React, { Component } from 'react'
import { Comment, Tooltip, Form, Button, List, Input } from 'antd'
import moment from 'moment';
const TextArea = Input.TextArea;
require('./commentList.css')

const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  
  const Editor = ({
    onChange, onSubmit, commentsubmit, commentvalue,
  }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={commentvalue} />
      </Form.Item>
      <Form.Item style={{textAlign: 'center'}}>
        <Button
          htmlType="submit"
          loading={commentsubmit}
          onClick={onSubmit}
          type="primary"
        >
          评论
        </Button>
      </Form.Item>
    </div>
  );

class commentList extends Component{
        constructor(props){
            super(props);
            this.state = {
                commentlist: [
                    {
                        actions: [<span>Reply to</span>],
                        author: 'Han Solo',
                        
                        content: (
                          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                        ),
                        datetime: (
                          <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().subtract(1, 'days').fromNow()}</span>
                          </Tooltip>
                        ),
                      },
                      {
                        actions: [<span>Reply to</span>],
                        author: 'Han Solo',
                        content: (
                          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                        ),
                        datetime: (
                          <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().subtract(2, 'days').fromNow()}</span>
                          </Tooltip>
                        ),
                      }
                ],
                commentcontent: [],
                commentsubmit: false,
                commentvalue: ''
            }
        };
        handleSubmit = () => {
            if (!this.state.value) {
              return;
            }
        
            this.setState({
              commentsubmit: true,
            });
        
            setTimeout(() => {
              this.setState({
                commentsubmit: false,
                commentvalue: '',
                commentlist: [
                  {
                    author: 'Han Solo',
                    
                    content: <p>{this.state.value}</p>,
                    datetime: moment().fromNow(),
                  },
                  ...this.state.commentcontent,
                ],
              });
            }, 1000);
        };
        handleChange = (e) => {
            this.setState({
              conmmentvalue: e.target.value,
            });
        };
        
        render(){
            
            return (
                <div>
                    <List
                        className="comment-list"
                        header={`${this.state.commentlist.length} 条评论`}
                        itemLayout="horizontal"
                        dataSource={this.state.commentlist}
                        renderItem={item => (
                        <li>
                            <Comment
                            
                            author={item.author}
                            content={item.content}
                            datetime={item.datetime}
                            />
                        </li>
                        )}
                    />
                    <div>
                        {this.state.commentcontent.length > 0 && <CommentList comments={this.state.commentcontent} />}
                        <Comment
                        
                        content={(
                            <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={this.state.commentsubmit}
                            value={this.state.commentvalue}
                            />
                        )}
                        />
                    </div>
                </div>
            )
        }

}

export default commentList;