import {fromJS} from 'immutable'
import {constants} from '../store'
const defaultState = fromJS({
		title: '',
		content: ''
})
export default (state = defaultState, action) => {
		switch (action.type) {
				case constants.INIT_DETAIL:
						console.log(action.data)
						return state.merge({
								title: fromJS(action.data.title),
								content: fromJS(action.data.content)
						})
				default:
						return state
		}
}
