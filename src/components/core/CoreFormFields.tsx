import { IFormField } from '@/lib/types';
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Select,
  SelectItem
} from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface CoreFormFieldsProps {
  fields: IFormField[];
}

const CoreFormFields: FunctionComponent<CoreFormFieldsProps> = ({ fields }) => {
  return fields.map((field: IFormField, index: number) => {
    const { name, type, placeholder, label, options } = field;

    if (type === 'autocomplete') {
      return (
        <Autocomplete
          key={index}
          label={label}
          placeholder={label}
          name='supplier_name'
          labelPlacement='outside'
          size='md'
          variant='bordered'
          inputProps={{
            classNames: {
              label: 'text-xs'
            }
          }}
          defaultItems={options}
        >
          {item => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
      );
    }

    if (type === 'select') {
      return (
        <Select
          key={index}
          items={options}
          label={label}
          labelPlacement='outside'
          placeholder={placeholder}
          variant='bordered'
          size='md'
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
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
        size='md'
        labelPlacement='outside'
        variant='bordered'
        classNames={{
          label: 'text-xs'
        }}
      />
    );
  });
};

export default CoreFormFields;
