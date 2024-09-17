// src/components/suppliers/SuppliersSearch.tsx
import { FC } from 'react';
import { Input, Button } from '@nextui-org/react';

interface SuppliersSearchProps {
  searchTerm: string;
}

const SuppliersSearch: FC<SuppliersSearchProps> = ({ searchTerm }) => {
  return (
    <form action="" method="GET" className="flex gap-4 mb-6">
      <Input
        name="searchTerm"
        placeholder="Хайх..."
        defaultValue={searchTerm}
        className="w-full md:w-64"
      />
      <Button type="submit" color="primary">
        Хайх
      </Button>
    </form>
  );
};

export default SuppliersSearch;
