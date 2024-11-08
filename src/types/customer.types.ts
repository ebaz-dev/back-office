export interface ICustomer {
  id: string;
  customerNo: string;
  parentId: string;
  name: string;
  regNo: string;
  userId: string;
  address: string;
  phone: string;
  type: string;
  bankAccounts: [];
  createdAt: Date | string;
  updatedAt: Date | string;
  version: number;
}
