import { IColumn } from '@/lib/types';
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Select,
  SelectItem
} from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface CoreFormFieldsProps {
  fields: IColumn[];
  isClearable?: boolean;
  className?: string;
  hideFields?: boolean;
}

const CoreFormFields: FunctionComponent<CoreFormFieldsProps> = props => {
  const { fields, isClearable, className, hideFields } = props;

  return fields.map((field: IColumn, index: number) => {
    const { name, fieldType, placeholder, label, options, isFilter } = field;

    if (hideFields && !isFilter) {
      return null;
    }

    if (fieldType === 'autocomplete') {
      return (
        <Autocomplete
          key={index}
          label={label}
          name={name}
          defaultItems={options}
          placeholder={placeholder}
          isClearable={isClearable}
          className={className}
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

    if (fieldType === 'select') {
      return (
        <Select
          key={index}
          name={name}
          items={options}
          label={label}
          className={className}
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
        type={fieldType}
        name={name}
        label={label}
        placeholder={placeholder}
        className={className}
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
