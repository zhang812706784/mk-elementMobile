<template>
    <div class="header">
        <img :src="sellerObj.avatar" class="headerImg"/>
        <div class="right-header-wrap">
            <div class="right-content-item row-one">
                <i class="brand-icon"></i>
                <span class="fontSize16 title-brand common-title">
                    {{sellerObj.name}}
                </span>
            </div>
            <div class="right-content-item row-two">
                <span class="fontSize14 common-title title-two">
                    {{sellerObj.description}}/{{sellerObj.deliveryTime}}分钟送达
                </span>
            </div>
            <div class="right-content-item row-three" v-if="sellerObj.supports">
                <i class="row-three-icon" :class= [iconArr[sellerObj.supports[0].type]]></i>
                <span class="fontSize12 common-title title-two">
                    {{sellerObj.supports[0].description}}
                </span>
            </div>
        </div>
        <div class="header-tip" @click="showDetailFun">
            <span class="fontSize12">{{5}}个</span><i class="icon-keyboard_arrow_right fontSize12"></i>
        </div>
        <img class="bgImage blurFilter" :src="sellerObj.avatar" alt="">
        <div class="header-bottom" @click="showDetailFun">
            <i class="heander-bottom-icon"></i>
            <span class="fontSize12 overFlow">{{sellerObj.bulletin}}</span>
            <i class="icon-keyboard_arrow_right fontSize12"></i>
        </div>
        <detail v-if="detailFlag" :sellerObj="sellerObj" @closeDetail = "closeDetail"></detail>
    </div>
</template>
<script>
import detail from '@/components/header/detail';
export default {
    name:"cHeader",
    props:['sellerObj'],
    data(){
        return{
            iconArr:['decrease_1','discount_1','guarantee_1','invoice_1','special_1'],
            detailFlag: false
        }
    },
    components:{
        detail
    },
    methods:{
        showDetailFun(){
            this.detailFlag = true;
        },
        closeDetail(){
            this.detailFlag = false;
        }
    }
}
</script>
<style lang="less" scope>
    @import "../../common/less/mixin.less";
    .header{
        font-size: 0px;
        background: rgba(7, 17, 27 , 0.5);
        padding-top: 48px;
        position: relative;
        overflow: hidden;
        span,i{
            color: #ffff; 
        }
        .bgImage{
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: -1;
        }
        &>.header-tip{
            position:absolute;
            right: 24px;
            bottom: 79px;
            border-radius: 40px;
            background: rgba(0, 0, 0, 0.2);
            padding: 10px 15px;
            span{
                margin-right: 4px;
            }
        }
        &>.headerImg{
            width: 128px;
            height: 128px;
            margin-bottom: 36px;
            vertical-align: top;
            margin-right: 32px;
            margin-left: 48px;
        }
        .right-header-wrap{
            display: inline-block;
            font-size: 20px;
            vertical-align: top;
            .right-content-item{
                .brand-icon{
                    .background('~@/assets/image/header/brand');
                    width: 60px;
                    height: 36px;
                    display: inline-block;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin-right: 12px;
                }
                .common-title{
                    color: rgb(255,255,255);
                    
                }
                .title-brand{
                    font-weight: bold;

                }
                .title-two{
                    
                }

                span{
                    display: inline-block;
                    vertical-align: top;
                }
            }
            .row-one{
                margin-bottom: 16px;
            }
            .row-two{
                margin-bottom: 20px;
            }
            .row-three{
                .decrease_1{
                    .background('~@/assets/image/header/decrease_1');
                }
                .discount_1{
                    .background('~@/assets/image/header/discount_1');
                }
                .guarantee_1{
                    .background('~@/assets/image/header/guarantee_1');
                }
                .invoice_1{
                    .background('~@/assets/image/header/invoice_1');
                }
                .special_1{
                    .background('~@/assets/image/header/special_1');
                }
            }
            .row-three-icon{
                width: 24px;
                height: 24px;
                background-size: 100% 100%;
                display: inline-block; 
                margin-right: 8px;
                vertical-align: top;
            }
        }
        .header-bottom{
            height: 56px;
            font-weight: 200;
            line-height: 56px;
            color: #ffff;
            background: rgba(7, 17, 27 , 0.2);
            padding: 0 24px; 
            
            .heander-bottom-icon{
                .background('~@/assets/image/header/bulletin');
                width: 66px;
                height: 36px;
                margin-right: 8px;
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
            span{
                width: calc(100% - 100px);
            }
            span,i{
                vertical-align: middle;
            }
        }
    }
</style>
