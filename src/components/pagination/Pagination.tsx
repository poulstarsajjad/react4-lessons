"use client";

import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
}

export default function Pagination({ currentPage, pageCount }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="mt-6 flex justify-center">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        onPageChange={handlePageClick}
        containerClassName={"flex gap-2"}
        pageClassName={"border px-3 py-1 rounded cursor-pointer"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={"border px-3 py-1 rounded cursor-pointer"}
        nextClassName={"border px-3 py-1 rounded cursor-pointer"}
      />
    </div>
  );
}
