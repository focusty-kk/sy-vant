export type SharedCellProps = {
  icon?: string;
  size?: string;
  border: boolean;
  center?: boolean;
  isLink?: boolean;
  required?: boolean;
  clickable?: boolean;
  titleStyle?: any;
  titleClass?: any;
  valueClass?: any;
  labelClass?: any;
  title?: string | number;
  value?: string | number;
  label?: string | number;
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
}

export const cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null as any,
  titleClass: null as any,
  valueClass: null as any,
  labelClass: null as any,
  title: [String, Number],
  value: [String, Number],
  label: [String, Number],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};
