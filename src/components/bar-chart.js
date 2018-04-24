import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Bar,
    mixins: [
        reactiveProp
    ],
    data() {
        return {
            customOptions: {
                tooltips:{
                    callbacks:{
                        title:function(tooltipItem, data){
                            return 'USD'
                        },
                        // label:function(tooltipItem,data){
                        //     return ''
                        // }
                    },
                    backgroundColor: 'rgba(55, 96, 117, 1)',
                    titleFontFamily: 'Roboto',
                    titleFontColor: '#ffffff',
                    displayColors: false,
                    yAlign: 'bottom'
                },
                responsive: false,
                legend: {
                    display: false
                },
                barThickness: 2,
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: '#BCCBDA'
                            },
                            gridLines:{
                                display: false,
                                zeroLinecolor: 'transparent'
                            },
                            barPercentage: 0.65,
                            categoryPercentage: 0.4,
                            // barThickness: 8
                        }],
                        yAxes:[{
                            ticks: {
                                min: 0,
                                max: 100,
                                stepSize: 20,
                                fontColor: '#BCCBDA'
                            },
                            gridLines:{
                                // display: false
                            },
                        }],
                        borderWidth: 20
                    }
                }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.customOptions)
    }
}