import Chart from 'react-apexcharts'
const DoctorTotalEarningGraph = () => {

    return <div className=" w-full  md:h-[400px] p-6   bg-white rounded-md">

        <div className="p-4 ">
            <p className="text-center font-bold">Total Earnings</p>
            <div>
                <p className="text-center mt-2">3.2% from last month</p>
            </div>
        </div>

        <Chart options={
            {
                chart: {
                    type: 'radialBar',
                    height: 200
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
                                    return '₦356K'
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
            series={[70]} type='radialBar' />

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