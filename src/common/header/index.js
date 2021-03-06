import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {
		HeaderWrapper,
		Logo,
		Nav,
		NavItem,
		NavSearch,
		Addition,
		Button,
		SearchWrapper,
		SearchInfo,
		SearchInfoTitle,
		SearchInfoSwitch,
		SearchInfoList,
		SearchInfoItem
} from './style'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from "react-router-dom";

class Header extends PureComponent {
		getListArea() {
				const {focused, hotList, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangeList, totalPage} = this.props
				const jsList = hotList.toJS()
				const pageList = []
				if (jsList.length){
						for (let i = (page - 1) * 10; i < page * 10 ; i++) {
								pageList.push(
										<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
								)
						}
				}
				if (focused || mouseIn) {
						return (
								<SearchInfo
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}>
										<SearchInfoTitle>
												热门搜索
												<SearchInfoSwitch onClick={() => handleChangeList(page, totalPage, this.spinIcon)}>
														<i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-huanyipi spin"></i>
														换一批
												</SearchInfoSwitch>
										</SearchInfoTitle>
										<SearchInfoList>
												{pageList}
										</SearchInfoList>
								</SearchInfo>
						)
				} else {
						return null
				}
		}

		render() {
				const {focused, handleInputBlur, handleInputFocus, hotList, login, logout} = this.props
				return (
						<HeaderWrapper>
								<Link to='/'>
										<Logo/>
								</Link>
								<Nav>
										<NavItem className='left active'>首页</NavItem>
										<NavItem className='left'>下载App</NavItem>
										{
												login ? <NavItem onClick={logout} className='right'>注销</NavItem> :
																<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
										}
										<NavItem className='right'>
												<i className="iconfont icon-Aa"/>
										</NavItem>
										<SearchWrapper>
												<CSSTransition
														in={focused}
														timeout={200}
														classNames="slide"
												>
														<NavSearch
																className={focused ? 'focused' : ''}
																onFocus={()=>handleInputFocus(hotList)}
																onBlur={handleInputBlur}
														>
														</NavSearch>
												</CSSTransition>
												<i className={focused ? 'focused iconfont icon-fangdajing zoom' : 'iconfont icon-fangdajing zoom'}></i>
												{this.getListArea()}
										</SearchWrapper>
								</Nav>
								<Addition>
										<Link to='/write'>
												<Button className='writting'>
														<i className="iconfont icon-bi"></i>
														写文章
												</Button>
										</Link>
										<Button className='reg'>注册</Button>
								</Addition>
						</HeaderWrapper>
				)
		}
}

const mapStateToProps = (state) => ({
		focused: state.getIn(['header', 'focused']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		hotList: state.getIn(['header', 'hotList']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
		handleInputFocus(hotList) {
				(hotList.size === 0) && dispatch(actionCreators.getHotList())
				dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
				dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
				dispatch(actionCreators.onMouseEnter())
		},
		handleMouseLeave() {
				dispatch(actionCreators.onMouseLeave())
		},
		handleChangeList(page, totalPage, spin) {
				let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
				if (originAngle) {
						originAngle = parseInt(originAngle, 10);
				}else {
						originAngle = 0;
				}
				spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
				if (page < totalPage) {
						dispatch(actionCreators.onListChange(page + 1))
				}else {
						dispatch(actionCreators.onListChange(1))
				}
		},
		logout() {
				dispatch(loginActionCreators.logout())
		}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
