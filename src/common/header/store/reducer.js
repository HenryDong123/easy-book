import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
				focused: false,
				mouseIn: false,
				hotList: [],
				page: 1,
				totalPage: 1
		}
)
export default (state=defaultState, action) =>{
		switch (action.type) {
				case constants.IS_FOCUS:
						return state.set('focused', true)
				case constants.IS_BLUR:
						return state.set('focused', false )
				case constants.GET_LIST:
						return state.merge({
								hotList: action.data,
								totalPage: action.totalPage
						})
				case constants.MOUSE_ENTER:
						return state.set('mouseIn', true);
				case constants.MOUSE_LEAVE:
						return state.set('mouseIn', false);
				case constants.CHANGE_PAGE:
						return state.set('page', action.page);
				default:
						return state
		}
}
