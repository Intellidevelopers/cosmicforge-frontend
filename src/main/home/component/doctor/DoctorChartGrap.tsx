import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

const DoctorChartGraph = () =>{

    return (

        <div className="w-full"> 
        <Box>
        <LineChart
       sx={{
        '& .MuiLineElement-root': {
       
          strokeWidth: 0,
        },
        '& .MuiAreaElement-series-Germany': {
          fill: "url('')",
        },
      }}
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}

  series={[
    {
      data: [2, 4, 2, 8.5, 1.5, 5],
      area: true,
       baseline:'min',
      
    },
   
  ]}
  width={500}
  height={300}
/>
        </Box>
        
        </div>
    );
}

export default DoctorChartGraph