import SvgColor from '@/components/SvgColor';
const icon = (name: string) => (
  <SvgColor src={`/src/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
export default icon;
