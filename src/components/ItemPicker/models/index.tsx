export interface Props {
  value?: {value: string; label: string} | undefined;
  options?: {value: string; label: string}[];
  title?: string;
  titleWidth?: number | string;
  width?: number | string;
  disabled?: boolean;
  required?: boolean;
  height?: number;
  style?: any;
  boxWrapperStyle ?: any ;
  onChangeValue?: (item: {value: any; label: string}) => void;
}

export interface ComponentInput extends Props {}
