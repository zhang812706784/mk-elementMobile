<template>
    <div class="header">
        I am a header
        <image src=""/>
        <div class="right-header-wrap">
            22
        </div>
    </div>
</template>
<script>
export default {
    name:"cHeader"
}
</script>
<style lang="less" scoped>
    .header{
        height: 212px;
        font-size: 0px;
        padding-top: 48px;
        image{
            width: 128px;
            height: 128px;
        }
        .right-header-wrap{
            display: inline-block;
            font-size: 20px;
        }
    }
</style>
