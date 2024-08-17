/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react';
type Order = 'asc' | 'desc';

export const visuallyHidden: CSSProperties = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number): number {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (a[orderBy] === null || a[orderBy] === undefined) {
    return 1;
  }
  if (b[orderBy] === null || b[orderBy] === undefined) {
    return -1;
  }

  if (typeof a[orderBy] === 'string' && typeof b[orderBy] === 'string') {
    return b[orderBy].localeCompare(a[orderBy]);
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends string>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: string | number | boolean },
  b: { [key in Key]: string | number | boolean }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// interface ApplyFilterProps<T> {
//   inputData: T[];
//   comparator: (a: T, b: T) => number;
//   filterName: string;
// }

// export function applyFilter<T extends { name: string }>({
//   inputData,
//   comparator,
//   filterName,
// }: ApplyFilterProps<T>): T[] {
//   const stabilizedThis: [T, number][] = inputData.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });

//   inputData = stabilizedThis.map((el) => el[0]);

//   if (filterName) {
//     inputData = inputData.filter(
//       (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
//     );
//   }

//   return inputData;
// }

export function applyFilter<T extends { name: string; [key: string]: any }>({
  inputData,
  comparator,
  filterName,
}: {
  inputData: T[];
  comparator: (a: T, b: T) => number;
  filterName: string;
}): T[] {
  const stabilizedThis = inputData.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter(
      (item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return inputData;
}
