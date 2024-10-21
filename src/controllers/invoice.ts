import { Invoice } from "@/interface/invoice";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

interface ResponseInvoice extends Invoice {
  _id: string;
}
// Create a new invoice
async function createInvoice(invoiceData: Invoice): Promise<any> {
  console.log("invoiceData", invoiceData);
  try {
    const URL = `${API_URL}/invoices`;
    console.log("URL", URL);
    const body = JSON.stringify(invoiceData);
    console.log("body", body);
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Get all invoices
async function getInvoices(): Promise<Invoice[]> {
  const response = await fetch(API_URL);
  const data: Invoice[] = await response.json();
  return data;
}

// Get a single invoice by ID
async function getInvoiceById(id: string): Promise<Invoice> {
  const URL = `${API_URL}/invoices/${id}`;
  try {
    const response = await fetch(URL);
    const data: Invoice = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {} as Invoice;
  }
}

// Update an invoice by ID
async function updateInvoice(
  id: string,
  invoiceData: Invoice,
): Promise<Invoice> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(invoiceData),
  });
  const data: Invoice = await response.json();
  return data;
}

// Delete an invoice by ID
async function deleteInvoice(id: string): Promise<{ message: string }> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data: { message: string } = await response.json();
  return data;
}

async function uploadImage(imageFile: File): Promise<any> {
  const URL = `${API_URL}/upload`;
  if (!imageFile) {
    return { url: "" };
  }
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
  uploadImage,
};
