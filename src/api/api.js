import axios from 'axios';

class Api {
    async getUserInfo(params = {}) {
        try {
            let result = await axios.post('/cp/userInfo', params)
            if (result) {
                return result
            }
        } catch (err) {
            let errs = err.toString();
            if (errs.includes('timeout')) {
                console.log('请求超时')
            } else {
                throw err
            }
        }
    }
}

export default new Api();