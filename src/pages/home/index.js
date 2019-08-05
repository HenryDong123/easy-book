import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
		HomeWrapper,
		HomeLeft,
		HomeRight,
		BackTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends PureComponent {

		backTop() {
				window.scrollTo(0, 0)
		}

		render() {
				return (
						<HomeWrapper>
								<HomeLeft>
										<img className='banner-img' alt=''
										     src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
										<Topic/>
										<List/>
								</HomeLeft>
								<HomeRight>
										<Recommend/>
										<Writer/>
								</HomeRight>
								{this.props.showScroll ? <BackTop onClick={this.backTop}>回到顶部</BackTop> : null}
						</HomeWrapper>
				)
		}

		componentDidMount() {
				this.props.getHomeData()
				this.bindEvents()
		}

		bindEvents() {
				window.addEventListener('scroll', this.props.changeScrollShow)
		}
		componentWillUnmount() {
				window.removeEventListener('scroll',this.props.changeScrollShow)
		}
}

const mapState = (state) => ({
		showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
		getHomeData() {
				dispatch(actionCreators.getHomeInfo())
		},
		changeScrollShow(e) {
				let $scrollTop = document.documentElement.scrollTop
				if ($scrollTop > 100 ) {
						dispatch(actionCreators.changeBackTop(true))
				}else {
						dispatch(actionCreators.changeBackTop(false))
				}

		}
})
export default connect(mapState, mapDispatch)(Home)
