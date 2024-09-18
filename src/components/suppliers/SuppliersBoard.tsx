import { FunctionComponent } from 'react';
import SuppliersSearch from '@/components/suppliers/SuppliersSearch';
import { Input, Button, Select, Switch } from '@nextui-org/react';

const demoSuppliers = [
  'Анунгоо ХХК',
  'СИРМ ХХК',
  'БЕТАСТАР ХХК',
  'БУРХАНДИГ ГОЁ САЙХАН ХХК',
  'ТАВАНБОГД ИНТЕРНЭЙШНЛ ХХК',
  'МОНОС КОСМЕТИК ХХК',
  'ГАРААНЫ СИ ТИ ЭС ФҮҮДС ХХ',
  'Анунгоо ХХК',
  'СИРМ ХХК',
  'БЕТАСТАР ХХК',
  'БУРХАНДИГ ГОЁ САЙХАН ХХК',
  'ТАВАНБОГД ИНТЕРНЭЙШНЛ ХХК',
  'МОНОС КОСМЕТИК ХХК',
  'ГАРААНЫ СИ ТИ ЭС ФҮҮДС ХХ',
  'Анунгоо ХХК',
  'СИРМ ХХК',
  'БЕТАСТАР ХХК',
  'БУРХАНДИГ ГОЁ САЙХАН ХХК',
  'ТАВАНБОГД ИНТЕРНЭЙШНЛ ХХК',
  'МОНОС КОСМЕТИК ХХК',
  'ГАРААНЫ СИ ТИ ЭС ФҮҮДС ХХК',
];

interface SuppliersBoardProps {
  suppliers: string[];
  searchTerm: string;
}

const SuppliersBoard: FunctionComponent<SuppliersBoardProps> = ({ suppliers = demoSuppliers, searchTerm = '' }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
           <h2 className="text-2xl font-semibold mb-4 text-gray-700">Нийлүүлэгч</h2>
      <SuppliersSearch searchTerm={searchTerm} />

      <button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Нийлүүлэгч нэмэх
      </button>
      <div className='flex flex-row'>
      <div className="overflow-y-auto max-h-[400px] w-[220px]">
        {suppliers && suppliers.length > 0 ? (
          <div className="space-y-2">
            {suppliers.map((supplier, index) => (
              <div key={index} className="p-2 w-[200px] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                {supplier}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">Олдсонгүй</div>
        )}
    
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
          <>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Нийлүүлэгч нэр</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input fullWidth label="Регистрийн дугаар" placeholder="2573105" />
              <Input fullWidth label="Утасны дугаар" placeholder="77071907" />
              <Input fullWidth label="Нийлүүлэгчийн нэр (Монгол)" />
              <Input fullWidth label="Нийлүүлэгчийн нэр (Англи)" placeholder="Anungoo ХХК" />
              <Input fullWidth label="Вебсайт" placeholder="https://ebazaar.mn" />
              <Input fullWidth label="Байгууллагын тайлбар (заавал биш)" placeholder="Description here..." />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <Switch defaultSelected>Automatic updates</Switch>
              <Switch defaultSelected>Automatic updates</Switch>
              <Switch defaultSelected>Automatic updates</Switch>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Input fullWidth label="Days to show" placeholder="3" />
              <Input fullWidth label="Delay (hours)" placeholder="11:00" />
            </div>

            <Button color="primary" className="mt-6">Оруулах</Button>
          </>
      </div>
      </div>

  
    </div>
  );
};

export default SuppliersBoard;
