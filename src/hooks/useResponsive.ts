import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

type QueryType = 'up' | 'down' | 'between' | 'only';
type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function useResponsive(
  query: QueryType,
  start: BreakpointKey,
  end?: BreakpointKey
): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = useMediaQuery(
    end ? theme.breakpoints.between(start, end) : theme.breakpoints.between(start, start)
  );
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    case 'only':
    default:
      return mediaOnly;
  }
}

export function useWidth(): BreakpointKey {
  const theme = useTheme();

  const keys: BreakpointKey[] = [...theme.breakpoints.keys].reverse() as BreakpointKey[];

  return (
    keys.reduce((output: BreakpointKey | null, key: BreakpointKey) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
