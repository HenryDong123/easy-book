import React, {Component} from 'react';
import {connect} from 'react-redux'
import {RecommendWrapper, RecommendItem, ListItem} from '../style';

class Recommend extends Component {
		render() {
				const recommendList = this.props.recommendList.toJS()
				return (
						<RecommendWrapper>
								{
										recommendList.map(item => (
												<RecommendItem imgUrl={item.imgUrl} key={item.id}>
												</RecommendItem>
										))
								}
						</RecommendWrapper>
				)
		}
}

const mapState = (state) => ({
		recommendList: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend)
