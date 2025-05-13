import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/initStore'
const DoctorTotalEarningGraph = () => {

    const wallet = useSelector((state:RootReducer)=>state.doctorWallet.wallet)

    const formatAmout = (amount:number)=>{
        if(amount){
          amount = amount/100
         return new Intl.NumberFormat().format(amount)
        }
     
        return 0
      }

      const percentage = (amount:number)=>{
        if(amount){
          amount = amount/100
        
          if(amount<50000){
            return 10
          }

          if(amount===50000 && amount<100000){
            return 30
          }


          if(amount===100000 && amount<200000){
            return 50
          }


          if(amount===200000 && amount<500000){
            return 70
          }

          if(amount===500000 && amount<700000){
            return 80
          }

          if( amount>700000){
            return 100
          }

          return 0

        }
     
        return 0
      }


    return <div className=" w-full  md:h-[400px] p-3   bg-white rounded-md">

        <div className="p-1">
            <p className="text-center font-bold">Total Earnings</p>
            <div>
              {/* <p className="text-center mt-2">3.2% from last month</p>*/}
            </div>
        </div>

        <Chart options={
            {
                chart: {
                    type: 'radialBar',
                    height: 1500
                },

                series: [59],

                fill: {
                    type: 'solid',
                    colors: ['#272EA7']

                },
                labels: ['Earnings  '],
                plotOptions: {
                    radialBar: {
                        track: {
                            background: '#272EA766'
                        },
                        barLabels: {
                            enabled: false
                        },
                        dataLabels: {
                            value: {

                                formatter: (_) => {
                                    return ` ₦${formatAmout(wallet?.amount!!)}` 
                                }
                            },
                            name: {
                                color: '#000',


                            }
                        }
                    }
                },
                stroke: {
                    lineCap: 'round',
                    show: true,
                    width: 2,
                    colors: ['red']
                }

            }
        }
            series={[percentage(wallet?.amount!!)]} type='radialBar' height={280} />



        <div className='flex gap-6 justify-center'>
            <div className='flex   place-items-center gap-1'>
                <p className='w-[10px] h-[10px] rounded-full bg-cosmic-primary-color'></p>
                <p className='font-light'>Net Income</p>
            </div>

            <div className='flex place-items-center gap-1'>
                <p className='w-[10px] h-[10px] rounded-full bg-cosmic-light-color-call'></p>
                <p className='font-light'>Commission</p>
            </div>
        </div>
    </div>
}


export default DoctorTotalEarningGraph