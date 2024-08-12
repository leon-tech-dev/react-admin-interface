import { format, getTime, formatDistanceToNow } from 'date-fns';

type DateInput = string | number | Date;

export function fDate(date: DateInput, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: DateInput, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: DateInput): number {
  return date ? getTime(new Date(date)) : 0;
}

export function fToNow(date: DateInput): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
