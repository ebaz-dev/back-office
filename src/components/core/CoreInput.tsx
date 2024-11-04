import React from "react";
import { Input, InputProps } from "@nextui-org/react";

interface CoreInputProps extends InputProps {

}

export default function CoreInput(props: CoreInputProps) {
  return (
    <Input
      labelPlacement='outside'
      variant='bordered'
      classNames={{
        label: 'text-xs'
      }}
      size='md'
      {...props}
    />
  );
}
