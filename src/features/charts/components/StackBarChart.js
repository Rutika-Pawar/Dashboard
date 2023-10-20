import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import TitleCard from '../../../components/Cards/TitleCard';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  function StackBarChart(){
  
      const options = {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        };
        
        const labels = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'];
        
        const data = {
          labels,
          datasets: [
            {
              label: 'Guest',
              data: labels.map(() => { return Math.random() * 1000 + 500 }),
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'User',
              data: labels.map(() => { return Math.random() * 1000 + 500 }),
              backgroundColor: 'rgba(53, 162, 235, 1)',
            },
            
          ],
        };
  
      return(
        <TitleCard title={"Sales"} topMargin="mt-2">
              <Bar options={options} data={data} />
        </TitleCard>
  
      )
  }
  
  
  export default StackBarChart