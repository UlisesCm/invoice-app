export interface Company {
  companyName: string;
  firstName: string;
  lastName: string;
  companyWebsite: string;
  companyAddress: string;
  cityStateZip: string;
  country: string;
  phoneNo: string;
  email: string;
  imageUrl: string;
}

export interface Client {
  clientCompany: string;
  clientFirstName: string;
  clientLastName: string;
  clientAddress: string;
  clientCityStateZip: string;
  clientCountry: string;
  clientEmail: string;
}

export interface Invoice {
  company: Company;
  client: Client;
  no: string;
  date: string;
  dueDate: string;
  subtotal: number | string;
  tax: number | string;
  discount: number | string;
  total: number | string;
  notes: string;
  table: Item[];
}

export interface Item {
  itemId: number | string;
  description: string;
  quantity: number | string;
  price: number | string;
}
