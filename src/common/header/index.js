import React, {Component} from 'react'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group';

class Header extends Component {
		constructor(props){
				super(props)
				this.state = {
						focused: false
				}
		}
		handleInputFocus(){
				this.setState(()=>({
						focused: true
				}))
		}
		handleInputBlur(){
				this.setState(()=>({
						focused: false
				}))
		}
		render() {
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
														in={this.state.focused}
														timeout={200}
														classNames="slide"
												>
														<NavSearch
																className={this.state.focused ? 'focused': ''}
																onFocus={this.handleInputFocus.bind(this)}
																onBlur={this.handleInputBlur.bind(this)}
																>
														</NavSearch>
												</CSSTransition>
												<i className={this.state.focused ? 'focused iconfont icon-fangdajing zoom': 'iconfont icon-fangdajing zoom'}></i>
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
}

export default Header
