import axios from 'axios'
import {fromJS} from 'immutable'
import {constants} from '../store'

const initHomeData = (data) => {
		return {
				type: constants.INIT_HOME,
				topicList: data.topicList,
				articleList: data.articleList,
				recommendList: data.recommendList
		}
}
const addHomeList = (data, nextPage) => {
		return {
				type: constants.ADD_MORE_LIST_ITEM,
				data: fromJS(data),
				page: nextPage
		}
}
export const getHomeInfo = () => {
		return (dispatch) => {
				axios.get('/api/home.json').then(res => {
						dispatch(initHomeData(res.data.data))
				})
		}
}
export const getMoreList = (page) => {
		return (dispatch) => {
				axios.get('/api/homeList.json',{
						params:{
								page
						}
				}).then(res => {
						console.log(res.data.data)
						dispatch(addHomeList(res.data.data, page+1))
				})
		}
}
