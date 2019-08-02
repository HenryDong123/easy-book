import {constants} from '../store'
import {fromJS} from 'immutable'

const defaultState = fromJS({
		topicList: [],
		articleList: [],
		recommendList: [],
		articlePage: 1
})
const initHomeData = (state, action) => {
		return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
		});
};
const addArticleList = (state, action) => {
		return state.merge({
				articleList: state.get('articleList').concat(action.data),
				articlePage: action.page
		})
}

export default (state = defaultState, action) => {
		switch (action.type) {
				case constants.INIT_HOME:
						return initHomeData(state, action)
				case constants.ADD_MORE_LIST_ITEM:
						return addArticleList(state, action)
				default:
						return state
		}
}
