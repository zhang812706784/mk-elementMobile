<template>
    <div class="header">
        <img :src="sellerObj.avatar"/>
        <div class="right-header-wrap">
            22
        </div>
    </div>
</template>
<script>
export default {
    name:"cHeader",
    props:['sellerObj']
}
</script>
<style lang="less" scoped>
    .header{
        font-size: 0px;
        padding-top: 48px;
        padding-left: 48px;
        background: yellow;
        img{
            width: 128px;
            height: 128px;
            margin-bottom: 36px;
            vertical-align: top;
            margin-right: 32px;
        }
        .right-header-wrap{
            display: inline-block;
            font-size: 20px;
            vertical-align: top;
        }
    }
</style>
