import { Pagination } from "@nextui-org/react";

interface CorePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}
const CorePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CorePaginationProps) => {
  return (
    <div className="py-2 px-2 flex justify-center items-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={currentPage}
        total={totalPages}
        onChange={onPageChange}
        classNames={{ wrapper: "shadow-md" }}
      />
    </div>
  );
};

export default CorePagination;
