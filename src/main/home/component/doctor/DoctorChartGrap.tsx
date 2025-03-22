import Chart from 'react-apexcharts'
//import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

const DoctorChartGraph = () => {

  return (

    <div className=" w-full  h-[400px]  bg-white rounded-md">
      <div className='w-full   p-4 flex justify-center place-items-center gap-2'>
        <p className='font-bold text-[14px] text-center'>Patient Appointment</p>

        <div className='flex place-items-center gap-1'>
          <p className='w-[10px] h-[10px] bg-cosmic-primary-color'></p>
          <p>Male</p>
        </div>

        <div className='flex place-items-center gap-1'>
          <p className='w-[10px] h-[10px] bg-[#F9AEF1]'></p>
          <p>Female</p>
        </div>
        <div className='border  rounded-md '>
          <select>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>
      <Chart options={

        {



          chart: {
            id: 'chart',
            toolbar: {
              show: false
            }
          },
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', "Oct", 'Nov', 'Dec'],
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          tooltip: {
            enabled: false
          },

          grid: {
            show: false
          },
          stroke: {
            curve: 'smooth',
            width: 1
          },
          colors: ['#272EA7', '#F9AEF1'],
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 0.5,
              opacityFrom: 0.9,
              opacityTo: 0.4
            }
          }

        }
      }


        series={[
          {
            data: [1, 2, 3, 2, 3, 3, 2, 1.5, 3, 5, 3.9],

          },
          {
            data: [2, 4, 2, 4, 2, 3, 2, 3.5, 3, 5, 4.2],

          }
        ]} type='area' width={'100%'} height={300} />
    </div>
  );
}

export default DoctorChartGraph