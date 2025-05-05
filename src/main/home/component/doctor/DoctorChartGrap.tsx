import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store/initStore';
import { useMemo, useState } from 'react';
//import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

const DoctorChartGraph = () => {

  const [monthDetails,setMonthDetails] = useState<number[]>()

  const [monthDetailsFemale,setMonthDetailsFemale] = useState<number[]>()

   const appointmentDetails = useSelector((state:RootReducer)=>state.appointments)



   useMemo(()=>{

    

    if(appointmentDetails.appointments){

      let monthd = [{month:'Jan',numberOfAppointment:0},{month:'Feb',numberOfAppointment:0},{month:'Mar',numberOfAppointment:0},{month:'Apr',numberOfAppointment:0},{month:'May',numberOfAppointment:0},{month:'Jun',numberOfAppointment:0},{month:'July',numberOfAppointment:0},{month:'Aug',numberOfAppointment:0},{month:'Sept',numberOfAppointment:0},{month:'Oct',numberOfAppointment:0},{month:'Nov',numberOfAppointment:0},{month:'Dev',numberOfAppointment:0}]  
      let monthNumber:number[] = []
      let femalcount:number[] = []

      monthd.filter((monthDetail)=>{

      const count = appointmentDetails.appointments?.filter((appointment)=>{
         return appointment.appointmentDate.includes(monthDetail.month) && appointment.patientDetails.vitalSigns?.gender === 'male'
        })


        const countForFemale = appointmentDetails.appointments?.filter((appointment)=>{
          return appointment.appointmentDate.includes(monthDetail.month) && appointment.patientDetails.vitalSigns?.gender === 'female'
         })


         if(countForFemale){
          femalcount.push(countForFemale.length)
         }else{
          femalcount.push(0)
         }




        if(count){
          monthNumber.push(count.length)
          monthd.push({
            month:monthDetail.month,
            numberOfAppointment:count.length
             
          })
         }else{
          monthNumber.push(0)
          monthd.push({
            month:monthDetail.month,
            numberOfAppointment:0
             
          })
         }

        })

     setMonthDetailsFemale(femalcount)

      setMonthDetails(monthNumber)
      

    

    }

   },[appointmentDetails.appointments])


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
            data:monthDetails!! ,

          },
          {
            data:monthDetailsFemale!!,

          }
        ]} type='area' width={'100%'} height={300} />
    </div>
  );
}

export default DoctorChartGraph