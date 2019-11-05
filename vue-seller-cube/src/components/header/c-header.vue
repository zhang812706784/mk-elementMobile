<template>
    <div class="header">
        <img :src="sellerObj.avatar"/>
        <div class="right-header-wrap">
            <div class="right-content-item">
                <i class="brand-icon"></i>
                <span>
                    粥品香坊（大运村）
                </span>
            </div>
            <div class="right-content-item"></div>
            <div class="right-content-item"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"cHeader",
    props:['sellerObj']
}
</script>
<style lang="less" scope>
    @import "../../common/less/mixin.less";
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
            .right-content-item{

            }
            .brand-icon{
                .background('../../assets/image/brand');
            }
            
        }
    }
</style>
