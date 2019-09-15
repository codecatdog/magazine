import {Request} from "../utils/request.js"
class IndexModel extends Request{
  getArticalList (magazineId=0, start=0) {
    return this.getData({
      url: `/getIndexArticleList/${magazineId}/${start}`
    })
  }
  getRecommend(magazineId = 0) {
    return this.getData({
      url: `/getRecommendInfo/${magazineId}`
    })
  }
  getMarkList(magazineId = 0) {
    return this.getData({
      url: `/getMarkTypeList/${magazineId}`
    })
  }
}
export {IndexModel}