import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ListItem, ListInfo, LoadMore} from '../style';

class List extends Component {
		render() {
				const {articleList} = this.props
				const newArticleList = articleList.toJS()
				return (
						<div>
								{
										newArticleList.map(item=>(
												<ListItem key={item.id}>
														<img className='pic' src={item.imgUrl} alt=""/>
														<ListInfo>
																<h3 className='title'>{item.title}</h3>
																<p className='desc'>{item.desc}</p>
														</ListInfo>
												</ListItem>
										))
								}
						</div>

		)
		}
}

const mapState = (state) => ({
		articleList: state.getIn(['home', 'articleList'])
})
export default connect(mapState, null)(List);
