import { faker } from "@faker-js/faker";
import { createColumnHelper, ColumnDef } from "@tanstack/react-table";

export type Person = {
  userId: string;
  username: string; // before version 9.1.0, use userName()
  email: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
  asin: string;
  department: string;
  productName: string;
  price: Number;
  minPrice: Number;
  maxPrice: Number;
  profitMargin: Number;
};

function createCommerceRow() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    asin: faker.commerce.isbn(),
    department: faker.commerce.department(),
    productName: faker.commerce.productName(),
    price: faker.number.int(),
    minPrice: faker.number.int(),
    maxPrice: faker.number.int(),
    profitMargin: faker.number.float(),
  };
}

export function getMockData(count: number = 100): Person[] {
  faker.seed(123);
  return faker.helpers.multiple(createCommerceRow, { count });
}

const ColumnHelper = createColumnHelper<Person>();

export const mockColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "email",
    header: () => "Email",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "username",
    header: () => "UserName",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "productName",
    header: () => "Product Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "department",
    header: () => "Department",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "price",
    header: () => "Price",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "asin",
    header: () => "Asin",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "minPrice",
    header: () => "Min Price",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "maxPrice",
    header: () => "Max Price",
    cell: (info) => info.getValue(),
  },
  {
    header: () => "Profit Margin",
    accessorKey: "profitMargin",
    cell: (info) => info.getValue(),
  },
];
