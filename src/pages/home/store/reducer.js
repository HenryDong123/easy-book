import  {constants} from '../store'
import {fromJS} from 'immutable'
const defaultState = fromJS({
		topicList: [],
		articleList: [],
		recommendList: [],
})
const initHomeData = (state, action) => {
		return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
		});
};

export default (state=defaultState, action) =>{
		switch (action.type) {
				case constants.INIT_HOME:
						return initHomeData(state, action)
				default:
						return state
		}
}
