import axios from 'axios';
import * as constants from './contants';

const changeLogin = () => ({
		type: constants.CHANGE_LOGIN,
})
export const logout = () => ({
		type: constants.LOGOUT,
		value: false
})

export const login = (account,password) => {
		return (dispatch) => {
				axios.get('/api/login.json', {
						params: {
								account,
								password
						}
				}).then(res => {
						if(res.data.data){
								dispatch(changeLogin())
						}else {
								alert('登录失败')
						}
				})
		}
}
