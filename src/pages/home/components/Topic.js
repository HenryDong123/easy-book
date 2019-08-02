import React, { Component } from 'react';
import {connect} from 'react-redux'
import {TopicWrapper, TopicItem} from '../style'
class Topic extends Component {
	render() {
			const {topicList}  = this.props
			const newTopicList = topicList.toJS()
		return (
			<TopicWrapper>
					{
							newTopicList.map(item => (
									<TopicItem key={item.id}>
											<img className='topic-pic' src={item.imgUrl} alt=""/>
											{item.title}
									</TopicItem>
							))
					}

			</TopicWrapper>
		)
	}
		componentDidMount() {
		}
}
const mapStateToProps = (state)=>{
		return {
				topicList: state.getIn(['home', 'topicList'])
		}
}
export default connect(mapStateToProps,null)(Topic)
