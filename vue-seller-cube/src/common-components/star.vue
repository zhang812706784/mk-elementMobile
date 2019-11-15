<template>
    <div :class="[`star_wrap_${size}`]" class="star_main">
        <span v-for="(item,index) in starsList" 
        class="star_item" :key="index" :class="[`${item}`]"></span>
    </div>
</template>
<script>
export default {
    props:{
        score: {
            type: Number
        },
        size: {
            type: Number
        }
    },
    data(){
        return{
            starsList: []
        }
    },
    watch:{
        score:{
            handler(){
                this.drawStars();
            },
            immediate:true,//关键
        }
    },
    methods:{
        drawStars(){
            // 没小数点
            if(String(this.score).indexOf('.') < 0){
                this.addStarsList(this.score);
            }else{
                // 有小数点
                let d = String(this.score).split('.')[0];
                let f = String(this.score).split('.')[1];
                this.addStarsList(d);
                
                if(f >= 5){
                    this.starsList.push('half');
                }
            }
            if(this.starsList.length < 5){
                this.starsList.push('off');
            }
        },
        addStarsList(num){
            for (let index = 0; index < num; index++) {
                this.starsList.push('on');
            }
        }
    }
}
</script>
<style lang="less">
    @import "../common/less/mixin.less";
    .star_main{
        text-align:center;
        font-size: 0px;
    }
    .star_item{
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: inline-block;
        margin-right: 30px;
    }
    .star_wrap_24{
        .star_item{
            width: 30px;
            height: 30px;
        }
        .half{
            .background('~@/assets/image/star/star24_half');
        }
        .off{
            .background('~@/assets/image/star/star24_off');
        }
        .on{
            .background('~@/assets/image/star/star24_on');
        }
    }
    .star_wrap_36{
        .star_item{
            width: 45px;
            height: 45px;
        }
        .half{
            .background('~@/assets/image/star/star36_half');
        }
        .off{
            .background('~@/assets/image/star/star36_off');
        }
        .on{
            .background('~@/assets/image/star/star36_on');
        }
    }
    .star_wrap_48{
        .star_item{
            width: 60px;
            height: 60px;
        }
        .half{
            .background('~@/assets/image/star/star48_half');
        }
        .off{
            .background('~@/assets/image/star/star48_off');
        }
        .on{
            .background('~@/assets/image/star/star48_on');
        }
    }
</style>
