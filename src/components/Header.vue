<template>
    <div id="header">
        <a href="/">首页</a>
        <a href="/login">登录页</a>
        <a href="/manage">后台页</a>
        <dl class="userInfo">
            <dt>
                <img :src="userInfo.userImg" alt="">
            </dt>
            <dd>{{userInfo.name}}</dd>
        </dl>
    </div>
</template>
<script>
import Api from "@/api/api"
export default {
    name: 'Header',
    data() {
        return {
            userInfo: {
                name: '',
                userImg: '',
            }
        }
    },
    
    components: {},
    mounted() {
        this.getUserInfo()
    },
    updated() {

    },
    methods: {
        async getUserInfo() {
            let This = this,
                result = null;
            result = await Api.getUserInfo();
            if(result.data.code == 0) {
                let reData = result.data.data;
                This.userInfo = {
                    name: reData.name,
                    userImg: reData.userImg,
                }
            }
        }
    }
}
</script>
<style scoped>
#header {
    background: #333; height: 60px; font: 400 14px/60px "microsoft yahei"; color: #FFF; text-align: center;
}
#header a {
    color: #FFF;font: 400 20px/60px "microsoft yahei"; color: #FFF;  margin-right: 20px; outline: none; text-decoration: none;
}
#header a:hover {
    font-weight: 700;
}
#header .userInfo {
    float: right; position: relative; margin-right: 20px;
}
#header .userInfo dt {
    float: left; margin: 15px 0 0 0; border:1px solid #FFF; width: 30px; height: 30px; overflow: hidden; border-radius: 50%; position: relative;
}
#header .userInfo dt img {
    position: absolute; width: 100%; top: 50%;transform: translateY(-50%); z-index: 2; display: block;
}
#header .userInfo dd {
    float: left; font: 700 14px/60px "microsoft yahei"; color: #FFF; margin-left: 10px;
}
</style>