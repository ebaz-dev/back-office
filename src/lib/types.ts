export interface IColumn {
  uid: string;
  label: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IFormField {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  options: IOption[];
  defaultValue: string;
}
