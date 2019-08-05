import axios from 'axios'
import {INIT_DETAIL} from "./contants";

const initDetail = (data) => ({
		type: INIT_DETAIL,
		data
})
export const getDetail = (id) => {
		return (dispatch) => {
				axios.get('/api/detail.json', {
						params: {
								id
						}
				})
						.then(res => {
								dispatch(initDetail(res.data.data))
						})
		}
}
