<template>
    <div class="goods">
        <ul class="menu-list">
            <li class="menu-item fontSize12" 
                v-for="(item,index) in goodsList" :key="index">
               
                <span class="middle border-1px"><i class="menu-icon" v-if="item.type > -1" :class="[iconTyps[item.type]]"></i>{{item.name}}</span>
            </li>
        </ul>
        <div class="goods-wrap">
            <ul>
                <li v-for="(content,index) in goodsList" :key="index">
                    <h2 class="food-title fontSize14">{{content.name}}</h2>
                    <!-- 食物内容 -->
                    <ul class="food-wrap">
                        <li class="food-content border-1px" v-for="(food,index2) in content.foods" :key="index2">
                            <img :src="food.image" alt="" class="img-left">

                            <div class="content-right" v-if="food.name">

                                <p class="one-title margin16">{{food.name}}</p>

                                <p class="common-des margin16 fontSize12" v-if="food.description">
                                    <span>{{food.description}}</span>
                                </p>

                                <p class="common-des margin16 fontSize12" v-if="food.sellCount">
                                    <span style="margin-right: 24px;">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </p>

                                <p class="common-des margin16" v-if="food.price">
                                    <span class="real-price fontSize14">￥{{food.price}}</span>
                                    <span class="fontSize12" style="text-decoration: line-through;">
                                        {{food.oldPrice}}
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            
            
        </div>
    </div>
</template>
<script>
import {goods} from '@/api/app';
export default {
    data(){
        return{
            goodsList:[],
            iconTyps: ['decrease_3','guarantee_3','guarantee_3','invoice_3','special_3']
        }
    },
    methods:{
        async getGoods(){
            try{
                let res = await goods();
                this.goodsList = res.data;
            }catch(e){
                 console.log(e);
            }
        }
    },
    mounted(){
        this.getGoods();
    }
}
</script>
<style lang="less" scoped>
@import "../../common/less/mixin.less";
.goods{
    display: flex;
    .menu-list{
        width: 161px;
        .menu-item{
            height: 108px;
            width: 100%;
            padding: 0 24px;
            display: table;
            background: #f3f5f7;
            font-weight: 200;
            color: #333;
            box-sizing: border-box;
        }
        .middle{
            display: table-cell;
            vertical-align: middle;
            width: 112px;
            .border-1px(rgba(7,17,27,0.1));
        }
        .menu-icon{
            width: 24px;
            height: 24px;
            margin-right: 4px;
            margin-bottom: 4px;
            background-size: 100% 100%;
            vertical-align: top;
        }
    }
    
    .goods-wrap{
        flex: 1;
        margin-left: -1px; 
        .food-title{
            height: 52px;
            background-color: #f3f5f7;
            border-left: 1px solid #d9dde1;
            padding-left: 28px;
            color: rgb(147,153,159);
            line-height: 52px;
        }
        .food-wrap{
            
            .food-content{
                display: flex;
                margin: 0 36px;
                padding: 36px 0;
                align-items: center;
                .border-1px(rgba(7,17,27,.1));
                .img-left{
                   margin-right: 20px;
                   height: 128px;
                   width: 128px;
                }
                .margin16{
                    margin: 16px 0px; 
                }
                .one-title{
                    color:rgb(7,17,27);
                    margin-bottom: 16px;
                }
                .common-des{
                    color: rgb(147,153,159);
                }
                .real-price{
                    color:red;
                    font-weight: bold;
                    margin-right: 16px;
                }
            }
            
        }
    }
    .decrease_3{
        .background('~@/assets/image/header/decrease_3');
    }    
    .guarantee_3{
        .background('~@/assets/image/header/guarantee_3');
    }    
    .discount_3{
        .background('~@/assets/image/header/discount_3');
    }    
    .invoice_3{
        .background('~@/assets/image/header/invoice_3');
    }    
    .special_3{
        .background('~@/assets/image/header/special_3');
    }    

}
</style>
