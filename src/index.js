import './styles/index.scss'
import { CONFIG_AREA, CONFIG_BARS, CONFIG_LINES } from './utils/chart'

const ctx1 = document.getElementById('my-chart').getContext('2d')

const myChart = new Chart(ctx1, CONFIG_AREA)
const statisticChart = new Chart(CONFIG_BARS.ctx2, CONFIG_BARS)
const clientChart = new Chart(CONFIG_LINES.ctx3, CONFIG_LINES)

const bars = document.querySelectorAll('.progress_bar')

bars.forEach(item => {
  item.classList.add(`${item.dataset.type}`)
  item.style.width = Math.random() * 200 + 'px'   
})

const navigation = document.querySelector('.navigation')
const menu_links = document.querySelectorAll('.navigation__link')

navigation.addEventListener('click', (e) => {
  menu_links.forEach(link => {
    link.classList.remove('active')
  })
  e.target.classList.add('active')
})



