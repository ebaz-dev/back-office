"use client";

import { IColumn } from "@/types";
import moment from "moment";

export const MERCHANT_COLUMNS: IColumn[] = [
  {
    uid: "userId",
    name: "userId",
    label: "Харилцагчийн нэр",
    placeholder: "Харилцагчийн нэр",
  },
  {
    uid: "name",
    name: "name",
    label: "Худалдааны цэгийн нэр",
    placeholder: "Худалдааны цэгийн нэр",
    isFilterable: true,
    allowSorting: true,
  },
  {
    uid: "phone",
    name: "phone",
    label: "Утасны дугаар",
    placeholder: "Утасны дугаар",
    isFilterable: true,
  },
  {
    uid: "optionTest",
    name: "optionTest",
    fieldType: "select",
    label: "Аж ахуйн нэгжийн төрөл",
    isFilterable: true,
  },
  { uid: "id7", name: "", label: "Худалдааны цэгийн суваг" },
  { uid: "id8", name: "", label: "Худалдааны цэгийн үндсэн ангилал" },
  {
    uid: "businessStartDate",
    name: "businessStartDate",
    label: "Худалдааны цэгийн үйл ажиллагаа эхлүүлсэн огноо",
    customCell: (customValue: any) => moment(customValue).format("DD/MM/YYYY"),
  },
  { uid: "cityId", name: "cityId", label: "Хот/Аймаг" },
  { uid: "districtId", name: "districtId", label: "Дүүрэг/Сум" },
  { uid: "subDistrictId", name: "subDistrictId", label: "Хороо/Баг" },
  { uid: "address", name: "address", label: "Дэлгэрэнгүй хаяг" },
  { uid: "email", name: "email", label: "И-мэйл" },
  { uid: "id17", name: "", label: "Тусгай зөвшөөрөл" },
  { uid: "id18", name: "", label: "Хариуцсан ХТ код" },
];
