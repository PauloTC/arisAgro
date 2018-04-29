import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Chart.controllers.bar.extend({

    initialize: function (data) {
        Chart.types.Bar.prototype.initialize.apply(this, arguments);
        
        if (this.options.curvature !== undefined && this.options.curvature <= 1) {
            var rectangleDraw = this.datasets[0].bars[0].draw;
            var self = this;
            var radius = this.datasets[0].bars[0].width * this.options.curvature * 0.5;
            
            // override the rectangle draw with ours
            this.datasets.forEach(function (dataset) {
                dataset.bars.forEach(function (bar) {
                    bar.draw = function () {
                        // draw the original bar a little down (so that our curve brings it to its original position)
                        var y = bar.y;
                        // the min is required so animation does not start from below the axes
                        bar.y = Math.min(bar.y + radius, self.scale.endPoint - 1);
                        // adjust the bar radius depending on how much of a curve we can draw
                        var barRadius = (bar.y - y);
                        rectangleDraw.apply(bar, arguments);
                        
                        // draw a rounded rectangle on top
                        Chart.helpers.drawRoundedRectangle(self.chart.ctx, bar.x - bar.width / 2, bar.y - barRadius + 1, bar.width, bar.height, barRadius);
                        ctx.fill();
                        
                        // restore the y value
                        bar.y = y;
                    }
                })
            })
        }
    }
});

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
                responsive: true,
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