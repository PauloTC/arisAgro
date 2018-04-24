export default {
    mesActual: state => state.fecha ? state.fecha.format('MMMM YYYY').toUpperCase() : '--',
    labels: state => state.fecha ?  Array.apply(0,Array(12)).map((_i)=>state.fecha.subtract(1, 'months').format('MMM')) : '',
    
    chartDataset: (state, getters) => ({
        labels: getters.labels,
        datasets: state.datasets
    })
}