/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chart, { useChart } from '@/components/Chart';
import { CustomTheme } from '@/components/Chart/Chart';
import { useTheme } from '@emotion/react';

interface ChartSeries {
  name: string;
  type: string;
  fill: string;
  data: number[];
}

interface ChartOptions {
  colors: string[];
  plotOptions: {
    bar: {
      columnWidth: string;
    };
  };
  fill: {
    type: string[];
  };
  labels: string[];
  xaxis: {
    type: string;
  };
  tooltip: {
    shared: boolean;
    intersect: boolean;
    y: {
      formatter: (value: number) => string;
    };
  };
  [key: string]: any;
}

interface AppWebsiteVisitsProps {
  title: string;
  subheader: string;
  chart: {
    labels: string[];
    colors: string[];
    series: ChartSeries[];
    options: Partial<ChartOptions>;
  };
  [key: string]: any;
}

export default function AppWebsiteVisits({
  title,
  subheader,
  chart,
  ...other
}: AppWebsiteVisitsProps) {
  const theme = useTheme() as CustomTheme;
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} visits`;
          }
          return (value as number).toString();
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          theme={theme}
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}
