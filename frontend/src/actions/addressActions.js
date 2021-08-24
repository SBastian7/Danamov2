import Axios from "axios";
import { ADDRESS_CREATE_FAIL, ADDRESS_CREATE_REQUEST, ADDRESS_CREATE_SUCCESS } from "../constants/addressConstants"

export const createAddress = (address) => async (dispatch, getState) => {
    dispatch({
        type: ADDRESS_CREATE_REQUEST,
        payload: address,
    });
    try {
        const { userSignin:{userInfo}} = getState();
        const {data} = await Axios.post('/api/address', address, {
			headers: {
				Authorization: `Bearer ${userInfo.token}`
			},
		});
        dispatch({
            type: ADDRESS_CREATE_SUCCESS,
            payload: data.address
        })
        localStorage.setItem('shippingAddress',data.address)
    } catch (error) {
        dispatch({
			type: ADDRESS_CREATE_FAIL,
			payload: error.response && error.response.data.message
				? error.response.data.message
				: error.message
		})
    }
}