export default {
    mesActual: state =>  { (state.fecha) ? (state.fecha.format('MMMM YYYY').toUpperCase()) : '--'} ,

    labels: state => { (state.fecha) ?  Array.apply(0,Array(12)).map((_i)=>(state.fecha).subtract(1, 'month').format('MMM')) : '--' },
        
    chartDataset1: (state, getters) => ({ 
        labels: getters.labels,
        datasets: state.datasets1
    }),
     chartDataset2: (state, getters) => ({ 
        labels: getters.labels, 
        datasets: state.datasets2     
    }),
     chartDataset3: (state, getters) => ({ 
        labels: getters.labels, 
        datasets: state.datasets3     
    })
}