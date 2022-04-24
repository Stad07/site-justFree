const CONFIG_AREA =  {  
  type: 'line',
  data: {
    labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06', '06.06', '07.06', '08.06'],
    datasets: [
      {
        label: '',
        data: [35, 30, 47, 30, 55, 30, 50, 30, 50, 30],
        borderWidth: 0,
        backgroundColor: 'rgba(245, 0, 87, 0.6)',
        cubicInterpolationMode: 'monotone',
        fill: true,        
      },
      {
        label: '',
        data: [40, 50, 32, 40, 31, 43, 30, 47, 29, 46],
        borderWidth: 0,
        backgroundColor: 'rgba(156, 39, 176, 0.4)',
        cubicInterpolationMode: 'monotone',
        fill: true
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
          display: false
      }
    }
  }
}

// ..............................................................
const ctx2 = document.getElementById('statistic-chart').getContext('2d')
const purple_gradient = ctx2.createLinearGradient(0, 0, 0, 300)
purple_gradient.addColorStop(0, 'rgba(164,137,212,.9)')
purple_gradient.addColorStop(1, 'rgba(126,87,194,1)')

const CONFIG_BARS = {
  ctx2,  
  data: {
    labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06'],
    datasets: [
      {
        type: 'line',
        label: '',
        data: [50, 30, 60, 45, 55, 63, 67],
        borderColor: 'rgba(255, 196, 0, 1)',
        backgroundColor: 'rgba(255, 196, 0, 1)',
        borderWidth: 2
      },
      {
      type: 'bar',
      label: '',
      data: [50, 30, 60, 45, 55, 63, 67],
      backgroundColor: purple_gradient,
      borderWidth: 0,
      barThickness: 40,
      }      
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
}

// ....................................................
const ctx3 = document.getElementById('client-chart').getContext('2d')
const purple_gradient_line = ctx3.createLinearGradient(0, 0, 800, 200)
purple_gradient_line.addColorStop(0, 'rgba(164,137,212,.9)')
purple_gradient_line.addColorStop(1, 'rgba(126,87,194,1)')

const CONFIG_LINES = {
  ctx3,  
  type: 'line',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: '',
        data: [8, 12, 22, 22, 27, 26, 21],
        borderColor: purple_gradient_line,
        backgroundColor: purple_gradient_line,
        borderWidth: 3 
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
}

export { CONFIG_AREA, CONFIG_BARS, CONFIG_LINES }

