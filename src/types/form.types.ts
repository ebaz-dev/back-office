export interface IOption {
  value: string | number;
  label: string;
}

export interface IFormField {
  name: string;
  type?: string;
  label?: string;
  options?: IOption[];
  placeholder?: string;
  fieldType?: 'input' | 'select' | 'datepicker' | 'autocomplete';
}
