import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store/initStore';
import { useMemo, useState } from 'react';
//import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

const DoctorChartGraph = () => {

  const [monthDetails, setMonthDetails] = useState<number[]>()

  const [monthDetailsFemale, setMonthDetailsFemale] = useState<number[]>()

  const appointmentDetails = useSelector((state: RootReducer) => state.appointments)


  let normalizeValue = (value: number, range: number) => {
    return Math.min(5, Math.max(0, (value / range) * 5))
  }

  useMemo(() => {

    let monthd = [{ month: 'Jan', numberOfAppointment: 0 }, { month: 'Feb', numberOfAppointment: 0 }, { month: 'Mar', numberOfAppointment: 0 }, { month: 'Apr', numberOfAppointment: 0 }, { month: 'May', numberOfAppointment: 0 }, { month: 'Jun', numberOfAppointment: 0 }, { month: 'July', numberOfAppointment: 0 }, { month: 'Aug', numberOfAppointment: 0 }, { month: 'Sept', numberOfAppointment: 0 }, { month: 'Oct', numberOfAppointment: 0 }, { month: 'Nov', numberOfAppointment: 0 }, { month: 'Dec', numberOfAppointment: 0 }]
    let monthNumber: number[] = []
    let femalcount: number[] = []

 
    if (appointmentDetails.appointments && appointmentDetails.totalAppointments>0 && monthNumber.length<12) {

    

      monthd.forEach((monthDetail) => {

        const count = appointmentDetails.appointments?.filter((appointment) => {
          return appointment.appointmentDate.includes(monthDetail.month) && appointment.patientDetails.vitalSigns?.gender === 'male'
        })

        if (count) {
          if (appointmentDetails.totalAppointments < 10) {
            monthNumber.push(normalizeValue(count.length, 100))
            return
          }

          if (appointmentDetails.totalAppointments > 10 && appointmentDetails.totalAppointments < 50) {
            monthNumber.push(normalizeValue(count.length, 500))
            return
          }

          if (appointmentDetails.totalAppointments >= 50 && appointmentDetails.totalAppointments < 100) {
            monthNumber.push(normalizeValue(count.length, 500))
            return
          }

          if (appointmentDetails.totalAppointments >= 100 && appointmentDetails.totalAppointments < 500) {
            monthNumber.push(normalizeValue(count.length, 1000))
            return
          }
          else {
            monthNumber.push(normalizeValue(count.length, 5000))
          }

          monthd.push({
            month: monthDetail.month,
            numberOfAppointment: count.length

          })
        } else {
          monthNumber.push(0)
          monthd.push({
            month: monthDetail.month,
            numberOfAppointment: 0

          })
        }



        const countForFemale = appointmentDetails.appointments?.filter((appointment) => {
          return appointment.appointmentDate.includes(monthDetail.month) && appointment.patientDetails.vitalSigns?.gender === 'female'
        })


        if (countForFemale) {
          if (appointmentDetails.totalAppointments < 10) {
            femalcount.push(normalizeValue(countForFemale.length, 100))
          }

          if (appointmentDetails.totalAppointments > 10 && appointmentDetails.totalAppointments < 50) {
            femalcount.push(normalizeValue(countForFemale.length, 500))
            return
          }

          if (appointmentDetails.totalAppointments >= 50 && appointmentDetails.totalAppointments < 100) {
            femalcount.push(normalizeValue(countForFemale.length, 500))
            return
          }

          if (appointmentDetails.totalAppointments >= 100 && appointmentDetails.totalAppointments < 500) {
            femalcount.push(normalizeValue(countForFemale.length, 1000))
            return
          }
          else {
            femalcount.push(normalizeValue(countForFemale.length, 5000))
            return
          }

        } else {
          femalcount.push(0)
        }


      




      

      })

/**
 *   
 */

      setMonthDetailsFemale(femalcount)

      setMonthDetails(monthNumber)


    }

  }, [appointmentDetails.appointments])


  return (

    <div className=" w-full  h-[400px]  bg-white rounded-md">
      <div className='w-full   p-4 flex  place-items-center gap-2'>
        <p className='font-bold text-[16px] text-center min-w-[40%]'>Patient Appointment</p>

        <div className='flex w-full relative  gap-6'>
          <div className='flex place-items-center '>
            <p className='w-[10px] h-[10px] bg-cosmic-primary-color'></p>
            <p>Male</p>
          </div>

          <div className='flex place-items-center gap-1'>
            <p className='w-[10px] h-[10px] bg-[#F9AEF1]'></p>
            <p>Female</p>
          </div>
          <div className='border  rounded-md absolute right-0 gap-1'>
            <select>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
        </div>


      </div>
      <Chart options={

        {



          chart: {
            id: 'chart',
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },


          dataLabels: {
            enabled: false
          },

          xaxis: {
            tickAmount: 12,
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', "Oct", 'Nov', 'Dec'],
            min: 0,
            max: 12
          },

          yaxis: {
            tickAmount: 5,
            labels: {
              formatter: function (val) {
                const labels = ['0', '1K', '2k', '3K', '4K', '5K']



                return labels[Math.ceil(val)]

              }
            },
            min: 0,
            max: 5
          },
          legend: {
            show: false
          },
          tooltip: {
            enabled: false
          },

          grid: {
            show: true
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
            data: monthDetails!!,

          },
          {
            data: monthDetailsFemale!!,

          }
        ]} type='area' width={'100%'} height={300} />
    </div>
  );
}

export default DoctorChartGraph