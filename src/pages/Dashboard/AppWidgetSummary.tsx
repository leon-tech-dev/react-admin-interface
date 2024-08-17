import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { fShortenNumber } from '@/lib/formatNumber';

interface AppWidgetSummaryProps {
  title: string;
  total: number;
  icon?: React.ReactNode;
  color?: string;
  sx?: SxProps<Theme>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function AppWidgetSummary({
  title,
  total,
  icon,
  //   color = 'primary',
  sx,
  ...other
}: AppWidgetSummaryProps) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}
      <Stack spacing={0.5}>
        <Typography variant="h4">{fShortenNumber(total)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}
