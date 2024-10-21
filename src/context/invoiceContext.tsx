import {
  createInvoice,
  getInvoiceById,
  uploadImage,
} from "@/controllers/invoice";
import { cleanForm } from "@/model/form";
import { Form, useForm, UseFormReturnType } from "@mantine/form";
import { useParams, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";

export interface FormProps {
  company: {
    companyName: string;
    firstName: string;
    lastName: string;
    companyWebsite: string;
    companyAddress: string;
    cityStateZip: string;
    country: string;
    phoneNo: string;
    email: string;
    image?: File | null;
  };
  client: {
    clientCompany: string;
    clientFirstName: string;
    clientLastName: string;
    clientAddress: string;
    clientCityStateZip: string;
    clientCountry: string;
    clientEmail: string;
  };
  invoice: {
    no: string;
    date: Date | undefined;
    dueDate: Date | undefined;
    subtotal: number | string;
    tax: number | string;
    discount: number | string;
    total: number | string;
    notes: string;
  };
  table: itemProps[];
}

export interface itemProps {
  itemId: number | string;
  description: string;
  quantity: number | string;
  price: number | string;
}

interface InvoiceContextProps {
  form?: UseFormReturnType<FormProps>;
  url?: string | null;
}

export const InvoiceContext = createContext<InvoiceContextProps>({
  form: undefined,
});

interface InvoiceProviderProps {
  children: React.ReactNode;
  contentRef?: React.RefObject<HTMLDivElement>;
}

export const InvoiceProvider = ({
  children,
  contentRef,
}: InvoiceProviderProps) => {
  const NEW = "new";
  const [url, setUrl] = useState<string | undefined | null>(null);
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const reactToPrintFn = useReactToPrint({ contentRef });
  const form = useForm<FormProps>({
    initialValues: cleanForm,
  });

  const handleSubmit = async (values: typeof form.values) => {
    if (id === NEW) {
      await handleCreate(values);
      reactToPrintFn();
    } else {
      reactToPrintFn();
    }
  };

  const handleCreate = async ({
    invoice,
    client,
    company,
    table,
  }: FormProps) => {
    try {
      const res = await uploadImage(company.image!);
      const imageUrl = res.url as string;
      const newInvoice = {
        company: {
          ...company,
          imageUrl,
        },
        client: client,
        table: table,
        no: invoice.no,
        date: `${invoice?.date ?? new Date()}`,
        dueDate: `${invoice?.dueDate ?? new Date()}`,
        subtotal: +invoice.subtotal,
        tax: +invoice.tax,
        discount: +invoice.discount,
        total: +invoice.total,
        notes: invoice.notes,
      };
      const createdInvoice = await createInvoice(newInvoice);
      const { _id } = createdInvoice.invoice;
      router.push(`/${_id}`);
    } catch (error) {
      console.log("handle create", error);
    }
  };

  const setData = async (id: string) => {
    const res = await getInvoiceById(id as string);
    const imageUrl = res.company.imageUrl;
    setUrl(imageUrl);
    form.setValues({
      company: {
        ...res.company,
        image: null,
      },
      client: res.client,
      table: res.table,
      invoice: {
        no: res.no,
        date: new Date(res.date),
        dueDate: new Date(res.dueDate),
        subtotal: res.subtotal,
        tax: res.tax,
        discount: res.discount,
        total: res.total,
        notes: res.notes,
      },
    });
  };

  useEffect(() => {
    if (id === NEW) {
      form.setValues(cleanForm);
    } else {
      // fetch invoice
      setData(id as string);
    }
  }, [id]);

  return (
    <InvoiceContext.Provider
      value={{
        form,
        url,
      }}
    >
      <Form form={form} onSubmit={handleSubmit}>
        {children}
      </Form>
    </InvoiceContext.Provider>
  );
};
