<template>
    <div class="header-detail fontSize12">
        <div class="detail-wrap clearFix">
            <div class="detail-main breakRow">
                <h1 class="fontSize16">
                    {{sellerObj.name}}
                </h1>
            </div>
        </div>
        <div class="header-detail-footer">
            <i class="icon-close" @click="closeDetail"></i>
        </div>
    </div>
</template>
<script>
export default {
    props:['sellerObj'],
    data(){
        return{}
    },
    methods:{
        closeDetail() {
            this.$emit('closeDetail');
        }
    }
}
</script>
<style lang="less" scoped>
.header-detail{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(7, 17, 27, 0.8);
    z-index: 2;
    overflow-y: auto;
    color: #fff; 
    .detail-wrap{
        min-height: 100vh;
        .detail-main{
            padding-top: 128px; 
            padding-bottom: 128px; 
            h1{
                font-weight: 700;
                color: #fff;
                text-align: center;
                margin-bottom: 32px;
            }
        }
    }
    .header-detail-footer{
        margin-top: -128px;
        width: 100vw;
        text-align: center;
        i{
            height: 64px;
            width: 64px;
            font-size: 64px;
            color: rgba(255, 255, 255, 0.5); 
        }
    }
}
</style>
