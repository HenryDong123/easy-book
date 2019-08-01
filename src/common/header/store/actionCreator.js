import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
const changeList = (data) =>({
		type: constants.GET_LIST,
		data: fromJS(data),
		totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
		type: constants.IS_FOCUS
})
export const searchBlur = () => ({
		type: constants.IS_BLUR
})
export const onMouseEnter = () => ({
		type: constants.MOUSE_ENTER
})
export const onMouseLeave = () => ({
		type: constants.MOUSE_LEAVE
})
export const onListChange = (page) => ({
		type: constants.CHANGE_PAGE,
		page
})

export const getHotList = () => {
		return (dispatch) => {
				axios.get('/api/headerList.json').then(res=>{
						const data = res.data
						dispatch(changeList(data.data))
				})
		}
}
