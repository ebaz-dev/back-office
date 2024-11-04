import { IColumn } from '@/types/table.types';
import {
  Autocomplete,
  AutocompleteItem,
  DatePicker,
  Input,
  Select,
  SelectItem
} from '@nextui-org/react';
import { FunctionComponent } from 'react';
import CoreInput from '@/components/core/CoreInput';

interface CoreFormFieldsProps {
  fields: IColumn[];
  isClearable?: boolean;
  className?: string;
  type?: 'create' | 'filter' | 'edit' | 'show';
  errors?: {
    [key: string]: string[];
  };
}

const CoreFormFields: FunctionComponent<CoreFormFieldsProps> = props => {
  const { fields, isClearable, className, type, errors } = props;
  return fields.map((field: IColumn, index: number) => {
    const {
      name,
      fieldType,
      placeholder,
      label,
      options,
      defaultValue,
      isFilterable,
      isCreatable,
      isEditable,
      inputProps,
    } = field;

    if (!isFilterable && type === 'filter') {
      return null;
    }

    if (!isCreatable && type === 'create') {
      return null;
    }

    if (!isEditable && type === 'edit') {
      return null;
    }
    

    if (type === 'show') {
      return (
        <Input
          key={index}
          type='text'
          name={name}
          defaultValue={defaultValue?.toString() || '-'}
          label={label}
          disableAnimation
          isReadOnly
          className={className}
          size='md'
          labelPlacement='outside'
          variant='bordered'
          classNames={{
            label: 'text-xs'
          }}
        />
      );
    }

    if (fieldType === 'datepicker') {
      return (
        <DatePicker
          key={index}
          name={name}
          label={label}
          className={className}
          labelPlacement='outside'
          variant='bordered'
          dateInputClassNames={{ label: 'text-xs' }}
          errorMessage={errors?.[name]?.[0]}
          isInvalid={!!errors?.[name]?.[0]}
        />
      );
    }

    if (fieldType === 'autocomplete') {
      return (
        <Autocomplete
          key={index}
          label={label}
          name={name}
          defaultItems={options}
          placeholder={placeholder}
          defaultInputValue={defaultValue?.toString()}
          isClearable={isClearable}
          className={className}
          labelPlacement='outside'
          errorMessage={errors?.[name]?.[0]}
          isInvalid={!!errors?.[name]?.[0]}
          size='md'
          variant='bordered'
          inputProps={{
            classNames: {
              label: 'text-xs'
            }
          }}
        >
          {option => (
            <AutocompleteItem
              key={option.value}
              textValue={option.value.toString()}
            >
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
          defaultSelectedKeys={defaultValue ? [defaultValue.toString()] : ''}
          label={label}
          className={className}
          labelPlacement='outside'
          placeholder={placeholder}
          variant='bordered'
          errorMessage={errors?.[name]?.[0]}
          isInvalid={!!errors?.[name]?.[0]}
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
      <CoreInput
        {...inputProps}
        key={index}
        name={name}
        multiple
        defaultValue={defaultValue?.toString()}
        label={label}
        placeholder={placeholder}
        className={className}
        size='md'
        errorMessage={errors?.[name]?.[0]}
        isInvalid={!!errors?.[name]?.[0]}
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
