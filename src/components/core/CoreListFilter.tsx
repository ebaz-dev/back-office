import { useRef } from "react";
import CoreFormFields from "@/components/core/CoreFormFields";
import CoreSubmitButton from "@/components/core/CoreSubmitButton";
import { tr } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { BackspaceIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { clearAllFilterAction } from "@/app/actions/main";
import { IColumn } from "@/types";
import filterAction from "@/app/actions/filter";

interface CoreListFilterProps {
  columns: IColumn[];
  pathname: string;
}

const CoreListFilter = ({ columns, pathname }: CoreListFilterProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const tColumns = columns.filter((column) => column.isFilterable);

  const clearAllFilter = async () => {
    ref.current?.reset();
    clearAllFilterAction(pathname);
  };

  return (
    <form
      action={async (formData: FormData) =>
        filterAction(formData, tColumns, pathname)
      }
      ref={ref}
      className="grid grid-cols-7 gap-2 items-end"
    >
      <CoreFormFields type="filter" fields={tColumns} className="max-w-xs" />

      <CoreSubmitButton
        text="Хайх"
        startContent={<FunnelIcon className="w-4 h-4" />}
      />

      <Button
        type="button"
        onPress={clearAllFilter}
        color="danger"
        endContent={<BackspaceIcon className="w-4 h-4" />}
      >
        {tr("Цэвэрлэх")}
      </Button>
    </form>
  );
};

export default CoreListFilter;
