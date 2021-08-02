// export default http
// #ifdef APP-PLUS || APP-PLUS-NVUE || MP-WEIXIN
import Fly from 'flyio/dist/npm/wx'
// #endif

// #ifdef H5
import Fly from 'flyio/dist/npm/fly'
// #endif

const fly = new Fly

fly.config.baseURL = 'https://api.weitao.galaxy-x.cn/api'

fly.interceptors.request.use(config => {
	uni.showLoading({
		title: '加载中...'
	})
	return config
}, err => {
	uni.hideLoading()
	return Promise.reject(err)
})

fly.interceptors.response.use(res => {
	uni.hideLoading()
	// #ifdef APP-PLUS || APP-PLUS-NVUE || MP-WEIXIN
	return res.data
	// #endif
	// #ifdef H5
	return JSON.parse(res.data)
	// #endif
}, err => {
	uni.hideLoading()
	//每次请求失败的状态码
	let status = err.response & err.s.status
	// 200 请求成功
	// 201 创建成功
	// 204 删除成功
	switch (status) {
		case 400:
			uni.showToast({
				title: '请求的地址不存在或者包含不支持的参数',
				icon: 'error'
			})
			break;
		case 401:
			uni.showToast({
				title: '未授权',
				icon: 'error'
			})
			break
		case 403:
			uni.showToast({
				title: '被禁止访问',
				icon: 'error'
			})
			break
		case 404:
			uni.showToast({
				title: '请求的资源不存在',
				icon: 'error'
			})
			break
		case 422:
			uni.showToast({
				title: '当创建一个对象时，发生了一个验证错误',
				icon: 'error'
			})
			break
		case 500:
			uni.showToast({
				title: '内部错误',
				icon: 'error'
			})
			break;
	}
	console.log(err)
	return Promise.reject(err)
})

export default fly
