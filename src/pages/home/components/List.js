import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from '../store'
import { Link } from "react-router-dom";
class List extends Component {
		render() {
				const {articleList, loadMoreData, page} = this.props
				const newArticleList = articleList.toJS()
				return (
						<div>
								{
										newArticleList.map((item, index)=>(
												<Link to={'/detail/' + item.id} key={index}>
														<ListItem>
																<img className='pic' src={item.imgUrl} alt=""/>
																<ListInfo>
																		<h3 className='title'>{item.title}</h3>
																		<p className='desc'>{item.desc}</p>
																</ListInfo>
														</ListItem>
												</Link>
										))
								}
								<LoadMore onClick={()=>loadMoreData(page)}>更多</LoadMore>
						</div>

		)
		}
}

const mapState = (state) => ({
		articleList: state.getIn(['home', 'articleList']),
		page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
		loadMoreData(page){
				dispatch(actionCreators.getMoreList(page))
		}
})
export default connect(mapState, mapDispatch)(List);
