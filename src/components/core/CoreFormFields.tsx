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
  isClearable?: boolean;
}

const CoreFormFields: FunctionComponent<CoreFormFieldsProps> = props => {
  const { fields, isClearable } = props;

  return fields.map((field: IFormField, index: number) => {
    const { name, type, placeholder, label, options } = field;

    if (type === 'autocomplete') {
      return (
        <Autocomplete
          key={index}
          label={label}
          name={name}
          defaultItems={options}
          placeholder={placeholder}
          className='max-w-xs'
          isClearable={isClearable}
          labelPlacement='outside'
          size='md'
          variant='bordered'
          inputProps={{
            classNames: {
              label: 'text-xs'
            }
          }}
        >
          {option => (
            <AutocompleteItem key={option.value}>
              {option.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
      );
    }

    if (type === 'select') {
      return (
        <Select
          key={index}
          name={name}
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
          {option => (
            <SelectItem key={option.value.toString()}>
              {option.label}
            </SelectItem>
          )}
        </Select>
      );
    }

    return (
      <Input
        key={index}
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
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
