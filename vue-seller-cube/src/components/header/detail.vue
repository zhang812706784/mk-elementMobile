<template>
    <div class="header-detail fontSize12">
        <div class="detail-wrap clearFix">
            <div class="detail-main">
                <h1 class="fontSize16">
                    {{sellerObj.name}}
                </h1>
                <div>
                    <star :score = "sellerObj.score" :size="36"></star>
                </div>
                <div class="title-part-con">
                    <titlePart :titleInfo = '"优惠信息"'></titlePart>
                </div>
                <div class="discount-content common-part" v-if="sellerObj.supports.length">
                   <div class='discount-item' 
                        v-for="(item,index) in sellerObj.supports" :key="index">
                       <i class="dicount-icon-32 discount-i" :class="iconArr[item.type]"></i>
                       <span class="fontSize12 discount-span">{{item.description}}</span>
                   </div>
                </div>
                <div class="title-part-con">
                    <titlePart :titleInfo = '"商家公告"'></titlePart>
                </div>
                <p class="advice-wrap fontSize12 common-part">
                    {{sellerObj.bulletin}}
                </p>
            </div>
        </div>
        <div class="header-detail-footer">
            <i class="icon-close" @click="closeDetail"></i>
        </div>
    </div>
</template>
<script>
import star from '@/common-components/star';
import titlePart from '@/common-components/title-part';
export default {
    props:['sellerObj','iconArr'],
    data(){
        return{}
    },
    components:{
        star,
        titlePart
    },
    methods:{
        closeDetail() {
            this.$emit('closeDetail');
        }
    }
}
</script>
<style lang="less">
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
            padding: 128px 72px;
            h1{
                font-weight: 700;
                color: #fff;
                text-align: center;
                margin-bottom: 32px;
            }
            .title-part-con{
                margin-top: 56px;
                padding-left: 24px;
            }
            .common-part{
                margin-top: 48px;
                padding: 0 48px;
            }
            .discount-content{
               
                .discount-item{
                    margin-bottom: 24px;
                    .discount-i{
                        vertical-align: middle;
                    }
                    .discount-span{
                        vertical-align: middle;
                        margin-left: 12px;
                    }
                }
            }
            .advice-wrap{
                line-height: 48px;
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
