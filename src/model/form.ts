import { FormProps } from "@/context/invoiceContext";

export const cleanForm: FormProps = {
  company: {
    companyName: "",
    firstName: "",
    lastName: "",
    companyWebsite: "",
    companyAddress: "",
    cityStateZip: "",
    country: "",
    phoneNo: "",
    email: "",
    image: null,
  },
  client: {
    clientCompany: "",
    clientFirstName: "",
    clientLastName: "",
    clientAddress: "",
    clientCityStateZip: "",
    clientCountry: "",
    clientEmail: "",
  },
  invoice: {
    no: "",
    date: undefined,
    dueDate: undefined,
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
    notes: "",
  },
  table: [
    {
      itemId: 1,
      description: "",
      quantity: 1,
      price: 0,
    },
  ],
};
