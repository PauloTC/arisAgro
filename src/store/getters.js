export default {
    mesActual: state => state.fecha ? state.fecha.format('MMMM YYYY').toUpperCase() : '--',
    labels: state => {
        return  Array.apply(0, Array(12)).map((_,i) => {
            return state.fecha.subtract(i, 'months').format("MMM")
        })
    },
    chartDataset: (state, getters) => ({
        labels: getters.labels,
        datasets: state.dataset
    })
}