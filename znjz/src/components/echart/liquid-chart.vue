<template>
    <IEcharts :option="liquidoption"></IEcharts>
</template>
<script>
    import IEcharts from './charts.vue';
	import 'echarts-liquidfill/src/liquidFill.js';
    export default {
        name:"liquidchart",
        components: {
            IEcharts
        },
        props: {
            value: Number
        },
        data() {
            return {
                liquidoption: { 
                    // tooltip:{
                    //     trigger:'item',
                    //     formatter:function(param){
                    //         return '用途'
                    //     }
                    // },
                    color:["#64AFF7"],
                    series: [{
                        type: 'liquidFill',
                        radius: '80%',
                        data: [{value:0.5,
                        direction:'left',
                        itemStyle:{
                            normal:{
                                color:'#64AFF7'
                            }
                        }}],
                        // outline  外边
                        outline: {
                            // show: false
                            borderDistance: 0, //内环padding值
                            itemStyle: {
                                borderWidth: 1, //圆边线宽度
                                borderColor: '#fff',
                            },
                        },
                        // 内图 背景色 边
                        backgroundStyle: {
                          color: '#fff',
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 16,
                                    color:'#178DEC',
                                },
                                formatter: function(param) {
                                    return (param.value*100).toFixed(2)+"%";
                                },
                            }
                            
                        },
                    }]
                },
            }
        },
        mounted() {
            // this.liquidoption.series[0].data[0] = this.value;
        },
    }
</script>