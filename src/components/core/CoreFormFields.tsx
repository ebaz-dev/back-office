import { IFormField } from '@/types';
import { DatePicker, Input, Select, SelectItem } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface CoreFormFieldsProps {
  fields: IFormField[];
}

const CoreFormFields: FunctionComponent<CoreFormFieldsProps> = props => {
  const { fields } = props;

  return fields.map((field: IFormField, index: number) => {
    const { name, type, label, placeholder, fieldType, options } = field;

    if (fieldType === 'datepicker') {
      return (
        <DatePicker
          key={index}
          name={name}
          label={label}
          labelPlacement='outside'
          variant='bordered'
          dateInputClassNames={{ label: 'text-xs' }}
        />
      );
    }

    if (fieldType === 'select') {
      return (
        <Select
          key={index}
          name={name}
          label={label}
          items={options}
          placeholder={placeholder}
          labelPlacement='outside'
          variant='bordered'
          classNames={{
            label: 'text-xs'
          }}
        >
          {option => <SelectItem key={option.value}>{option.label}</SelectItem>}
        </Select>
      );
    }

    return (
      <Input
        key={index}
        variant='bordered'
        labelPlacement='outside'
        name={name}
        type={type}
        label={label}
        placeholder={placeholder}
        classNames={{
          label: 'text-xs'
        }}
      />
    );
  });
};

export default CoreFormFields;
