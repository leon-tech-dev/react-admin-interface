import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { fNumber } from '@/lib/formatNumber';
import Chart, { useChart } from '@/components/Chart';
import { CustomTheme } from '@/components/Chart/Chart';
import { useTheme } from '@emotion/react';

interface ChartItem {
  label: string;
  value: number;
}

interface ChartData {
  colors: string[];
  series: ChartItem[];
  options?: object;
}

interface AppConversionRatesProps {
  title?: string;
  subheader?: string;
  chart: ChartData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function AppConversionRates({
  title,
  subheader,
  chart,
  ...other
}: AppConversionRatesProps) {
  const theme = useTheme() as CustomTheme;
  const { colors, series, options } = chart;
  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ mx: 3 }}>
        <Chart
          theme={theme}
          dir="ltr"
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}
