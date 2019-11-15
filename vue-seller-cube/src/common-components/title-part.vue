<template>
    <div class="title-part">
        <span class="line"></span>
        <span class="words fontSize14">{{titleInfo}}</span>
        <span class="line"></span>
    </div>
</template>
<script>
export default {
    props:{
        titleInfo:{
            type: String
        }
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="less" scoped>
    .title-part{
        display: flex;
        align-items: center;
        .line{
            border-bottom: 1px solid rgba(255,255,255,0.2); 
            flex: 1;
        }
        .words{
            font-weight: 700;
            color: #fff;
            margin: 0 24px;
        }
    }
</style>
