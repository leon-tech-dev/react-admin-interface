import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme, Theme } from '@mui/material/styles';
import Chart, { useChart } from '@/components/Chart';
import { CustomTheme } from '@/components/Chart/Chart';

const CHART_HEIGHT = 400;
const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }: { theme: Theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

interface ChartData {
  series: Array<{
    name: string;
    data: number[];
  }>;
  colors: string[];
  categories: string[];
  options?: object;
}

interface AppCurrentSubjectProps {
  title?: string;
  subheader?: string;
  chart: ChartData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function AppCurrentSubject({
  title,
  subheader,
  chart,
  ...other
}: AppCurrentSubjectProps) {
  const theme = useTheme() as CustomTheme;
  const { series, colors, categories, options } = chart;

  const chartOptions = useChart({
    colors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: [...Array(6)].map(() => theme.palette.text.secondary),
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />
      <StyledChart
        theme={theme}
        dir="ltr"
        type="radar"
        series={series}
        options={chartOptions}
        width="100%"
        height={340}
      />
    </Card>
  );
}
