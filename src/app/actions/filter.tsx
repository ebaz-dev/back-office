"use server";

import { convertObjectToParam } from "@/lib/utils";
import { IColumn } from "@/types";
import { redirect } from "next/navigation";

export default async function filterAction(
  formData: FormData,
  columns: IColumn[],
  pathname: string
) {
  const rawFormData = columns.reduce(
    (acc, column) => ({
      ...acc,
      [column.name]: formData.get(column.name),
    }),
    {}
  );

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`${pathname}?${currentParams}`);
}
