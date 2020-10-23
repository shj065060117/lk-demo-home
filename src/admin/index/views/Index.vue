<template>
    <div>这是首页</div>
</template>
<script>
import Api from "@/api/api"
export default {
    name: 'Index',
    data() {
        return {

        }
    },
    
    components: {},
    mounted() {
        //this.getUserInfo()
    },
    updated() {

    },
    methods: {
        async getUserInfo() {
            let This = this,
                result = null;
            result = await Api.getUserInfo();
            console.log(result);
        }
    }
}
</script>