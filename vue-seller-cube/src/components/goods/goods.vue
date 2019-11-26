<template>
    <div class="goods">
        <div class="menu-list-wrap" ref="b1">
            <ul class="menu-list">
                <li class="menu-item fontSize12"  :class="{'activeIndex': activeIndex == index}"
                    v-for="(item,index) in goodsList" :key="index" @click="changeActive(index)">
                
                    <span class="middle border-1px"><i class="menu-icon" v-if="item.type > -1" :class="[iconTyps[item.type]]"></i>{{item.name}}</span>
                </li>
            </ul>
        </div>
        
        <div class="goods-wrap" ref="b2">
            <ul>
                <li v-for="(content,index) in goodsList" :key="index" class="li-hook">
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

                                <p class="common-des margin16">
                                    <span class="real-price fontSize14" v-if="food.price">￥{{food.price}}</span>
                                    <span class="fontSize12" style="text-decoration: line-through;"  v-if="food.oldPrice">
                                        ￥{{food.oldPrice}}
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
            goodHeights:[],
            activeIndex: 0,
            mSroll: null,
            lSroll: null,
            iconTyps: ['decrease_3','guarantee_3','guarantee_3','invoice_3','special_3']
        }
    },
    methods:{
        async getGoods(){
            try{
                let res = await goods();
                this.goodsList = res.data;
                this.$nextTick(()=>{
                    this.initBsScroll();
                    this.initHeightRange();
                })
            }catch(e){
                 console.log(e);
            }
        },
        changeActive(index){
            this.activeIndex = index;
            let elem = document.querySelectorAll('.li-hook')[index];
            this.lSroll.scrollToElement(elem,300);
        },
        initTempScroll(elem){
            let domS = this.$refs[elem];
            let bs = new this.bScroll(domS,{
                click: true,
                probeType: 3 //当 probeType 为 3 的时候，
                //不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件，
                //监听滚动的实时坐标
            });
            return bs;
        },
        // 根据滚动的高度计算  判断是否在高度区间内。
        computActiveIndex(y){
            let heights = this.goodHeights;
            for(let i=0; i < heights.length; i++){
                let current = heights[i];
                let next = heights[i+1];
                if(!next || (y >= current && y < next)){
                    this.activeIndex = i;
                    break;
                }
            }
            
        },
        // 实时监测滚动高度的变化
        initBsScroll(){
            this.mSroll = this.initTempScroll('b1');
            this.lSroll = this.initTempScroll('b2');
            this.initScollEvent(this.lSroll,'scroll',(pos)=>{
                let y = Math.abs(Math.round(pos.y));
                this.computActiveIndex(y);
            });
        },
        // bscroll绑定事件
        initScollEvent(bscroll,event,fun){
            bscroll.on(event,(pos)=>{
                fun(pos);
            })
        },
        // 数据生成以后，计算出每一个块区间
        initHeightRange(){
            let height = 0;
            let hooks = document.querySelectorAll('.li-hook');
            hooks.forEach( item => {
                this.goodHeights.push(height);
                height = height + item.offsetHeight;
            })
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
    height: calc(100vh - 348px - 94px);
    .activeIndex{
        background: #fff !important;
        position: relative;
        z-index: 2;
        margin-top: -1px;
        span::after{
             border: none !important;
        }
    }
    .menu-list-wrap{
        height: 100%;
        overflow: hidden;
    }
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
        overflow: hidden;
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
