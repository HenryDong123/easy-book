import axios from 'axios'
import {fromJS} from 'immutable'
import  {constants} from '../store'
const initHomeData = (data) =>{
		return {
				type: constants.INIT_HOME,
				topicList: data.topicList,
				articleList: data.articleList,
				recommendList: data.recommendList
		}
}
export const getHomeInfo = () =>{
		return (dispatch)=>{
				axios.get('/api/home.json').then(res=>{
						dispatch(initHomeData(res.data.data))
				})
		}
}
