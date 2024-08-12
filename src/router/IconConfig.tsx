import SvgColor from '@/components/SvgColor';
export const icon = (name: string) => (
  <SvgColor src={`/src/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
