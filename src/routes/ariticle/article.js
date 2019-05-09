import React from 'react'
import Navleft from '../../components/navleft/navleft'
import ArticleDetail from '../../components/articledetail/articledetail'
require('./article.css')

function ariticle(props){
    return(
        <div className='article'>
            <Navleft></Navleft>
            <ArticleDetail></ArticleDetail>
        </div>
    )
}

export default ariticle;