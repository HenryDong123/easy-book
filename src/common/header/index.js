import React from 'react'
import {connect} from 'react-redux'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
const Header = (props) => {
		const	{ focused, handleInputBlur, handleInputFocus} = props
		return (
				<HeaderWrapper>
						<Logo href='/'/>
						<Nav>
								<NavItem className='left active'>首页</NavItem>
								<NavItem className='left'>下载App</NavItem>
								<NavItem className='right'>登陆</NavItem>
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
														className={focused ? 'focused': ''}
														onFocus={handleInputFocus}
														onBlur={handleInputBlur}
												>
												</NavSearch>
										</CSSTransition>
										<i className={focused ? 'focused iconfont icon-fangdajing zoom': 'iconfont icon-fangdajing zoom'}></i>
								</SearchWrapper>
						</Nav>
						<Addition>
								<Button className='writting'>
										<i className="iconfont icon-bi"></i>
										写文章
								</Button>
								<Button className='reg'>注册</Button>
						</Addition>
				</HeaderWrapper>
		)
}

	const mapStateToProps = (state) => ({
			focused: state.header.get('focused')
	})

	const mapDispatchToProps = (dispatch) =>({
			handleInputFocus(){
					dispatch(actionCreators.searchFocus())
			},
			handleInputBlur(){
					dispatch(actionCreators.searchBlur())
			}
	})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
