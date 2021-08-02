import http from './index.js'

export default {
	//关于搜索的接口
	search:{
		//获取搜索推荐关键词
		suggest(query){
			return http.get(`/Search/suggest?query=${query}`)
		},
		// 获取搜索输入框占位词
		placeHolder(){
			return http.get('/Search/placeHolder')
		},
		// 获取搜索热词
		hotWords(){
			return http.get('/Search/hotWords')
		}
	},
	//关于用户的接口
	user:{
		// 获取可用优惠券数量
		couponCount(){
			return http.get('/User/couponCount')
		},
		// 更新记录
		//type:0新增 1优化 2修复
		updateHistory(type){
			return http.get('/User/updateHistory?type=${type}')
		},
		//获取用户优惠券
		// type:类型 0可用 1不可用
		coupon(type){
			return http.get(`/User/coupon?type=${type}`)
		}
	},
	//关于生活的接口
	life:{
		// 推荐文章
		// uuid 当前文章ID
		//page 页数
		//pageSize 数据条数
		getSimilarFeed(uuid,page,pageSize){
			return http.get(`/Life/getSimilarFeed?uuid=${uuid}&page=${page}&pageSize=${pageSize}`)
		},
		//文章详情
		// uuid 文章ID
		detail(uuid){
			return http.get(`/Life/detail?uuid=${uuid}`)
		},
		//生活板块
		// tab tabID
		// page 页数
		// pageSize 数据条数
		getHomeTab(tab,page,pageSize){
			return http.get(`/Life/getHomeTab?tab=${tab}&page=${page}&pageSize=${pageSize}`)
		},
		// 生活首页数据
		bktrSimple(){
			return http.get('/Life/bktrSimple')
		}
	},
	//关于商品的接口
	goods:{
		// 商品详情图
		detailImg(gid,title,type){
			return http.get(`/Goods/detailImg?gid=${gid}&title=${title}&type={type}`)
		},
		// 分类获取商品列表
		// sortBy: 综合排序传0 销量排序传8  新品传7 价格降序传2 价格升序传1 信用排序传6 
		queryIdSearch(query,sortBy,source){
			return http.post('/Goods/queryIdSearch',{
				filter:{
					attr: [],
					brands: [],
					category1: [],
					category2: [],
					category3: [],
					maxPrice: null,
					minPrice: null,
					services: [],
					special: [],
					specialCoupon: [],
					tags: []
				},
				query:query,
				sortBy:sortBy,
				source:source
			})
		},
		//搜索获取商品列表
		doSearch(query,sortBy,source){
			return http.post('/Goods/doSearch',{
				filter:{
					attr: [],
					brands: [],
					category1: [],
					category2: [],
					category3: [],
					maxPrice: null,
					minPrice: null,
					services: [],
					special: [],
					specialCoupon: [],
					tags: []
				},
				query:query,
				sortBy:sortBy,
				source:source
			})
		},
		//视频时长
		getTime(file){
			return http.get(`/Common/getTime?file=${file}`)
		},
		// 获取更多问答列表
		askInfo(gid){
			return http.get(`/Goods/askInfo?gid=${gid}`)
		},
		//通过评价标签获取评价列表
		commentContent(gid,page,pageSize,tagId){
			return http.get(`/Goods/commentContent?gid=${gid}&page=${page}&pageSize=${pageSize}&tagId=${tagId}`)
		},
		// 获取更多评价标签
		commentTag(gid){
			return http.get(`/Goods/commentTag?gid=${gid}`)
		},
		// 详情页推荐商品-排行榜-问答
		composeTwo(gid){
			return http.get(`/Goods/composeTwo?gid=${gid}`)
		},
		//获取商品详情图
		detailImg(type,gid,title){
			return http.get(`/Goods/detailImg?type=${type}&gid=${gid}&title=${title}`)
		},
		// 商品详情
		detail(gid){
			return http.get(`/Goods/detail?gid=${gid}`)
		},
		//按商品ID查询商品
		queryByGids(gids){
			return http.post(`/Goods/queryByGids`,{
				gids:gids
			})
		},
		// 推荐商品
		// type:7
		// offset 页码
		// limit每页显示多少条
		recommend(type,offset,limit){
			return http.get(`/Goods/recommend?type=${type}&offset=${offset}&limit=${limit}`)
		},
	},
	//分类
	classify:{
		// 通过一级分类获取二级分类
		detail(catId){
			return http.get(`/Category/detail?catId=${catId}`)
		},
		//一级分类
		list(){
			return http.get('/Category/list')
		}
	},
	//首页
	home:{
		// BEST商品列表
		bestGoods(){
			http.post('/HomePage/bestGoods')
		},
		//APP首页数据
		appHomeData(userAgent){
			return http.get(`/HomePage/appHomeData?User-Agent=${userAgent}`)
		},
		// best
		best(){
			return http.get('/HomePage/best')
		},
		// 总榜商品列表
		topGoodsList(offset,limit){
			return http.get(`/HomePage/topGoodsList?offset=${offset}&limit=${limit}`)
		},
		// 总榜
		topList(){
			return http.get('/HomePage/topList')
		},
		//直播列表
		live(){
			return http.get('/HomePage/live')
		},
		// 秒杀
		// offset 数据偏移量（分页）
		// limit 数据条数
		// plan_id type为1时，传入秒杀计划ID 【例如：30384】
		// type 类型，0为秒杀首页，1为列表数据
		seckill(offset,limit,plan_id,type){
			return http.get(`/HomePage/seckill?offset=${offset}&limit=${limit}&plan_id=${plan_id}&type=${type}`)
		},
		// 众筹
		crowdfunding(){
			return http.get('/HomePage/crowdfunding')
		},
		// 每日上新
		new(){
			return http.get('/HomePage/new')
		},
		// 按分类获取首页底部商品列表
		// index 页数
		feeds(index,query_id){
			return http.get(`/HomePage/feeds?index=${index}&query_id=${query_id}`)
		},
		// 首页数据
		homeData(){
			return http.get('/HomePage/homeData')
		},
		//测试
		yiyan(){
			return http.get('/HomePage/yiyan')
		}
	}
}
