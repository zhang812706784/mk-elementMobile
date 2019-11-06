<template>
    <div class="header">
        <img :src="sellerObj.avatar"/>
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
        <div class="header-tip">
            <span class="fontSize12">{{5}}个</span><i class="icon-keyboard_arrow_right fontSize12"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:"cHeader",
    props:['sellerObj'],
    data(){
        return{
            iconArr:['decrease_1','discount_1','guarantee_1','invoice_1','special_1']
        }
    }
}
</script>
<style lang="less" scope>
    @import "../../common/less/mixin.less";
    .header{
        font-size: 0px;
        background: pink;
        padding-top: 48px;
        position: relative;
        &>.header-tip{
            position:absolute;
            right: 24px;
            bottom: 50px;
            border-radius: 40px;
            background: rgba(0, 0, 0, 0.2);
            padding: 10px 15px;
            span,i{
                display:inline-block;
                color: #ffff; 
                vertical-align: middle;
            }
            span{
                margin-right: 4px;
            }
        }
        &>img{
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
    }
</style>
