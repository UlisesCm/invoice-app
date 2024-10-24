"use client";
import { Accordion, Container, Text, Title } from "@mantine/core";
import React from "react";
import { AccordionContainer } from "./InvoiceFAQComponent.css";

export const InvoiceFAQComponent = () => {
  const faq = [
    {
      title: "What is an invoice?",
      content: `
      An invoice is a billing document issued by a seller to a customer.

      The document typically:

      Details the contact and billing information
      Quantifies an itemized list of goods or services sold
      Provides a clear total for the purchase
      Defines any discounts or specific payment terms
      Contains a unique invoice number and date
        `,
    },
    {
      title: "What is an invoice number?",
      content: `
      An invoice number is a unique number assigned to each new invoice you create. These numbers are then used to organize and track each invoice sent.

      Your invoice numbers should be assigned in sequential order. For example, your very first invoice might be “invoice no. 1,” followed by “invoice no. 2,” and so on. Invoice numbers aren’t specific to one customer, so you should keep a running total across all of the invoices you send.

      That being said, some businesses choose to adapt their numbering system to meet their individual needs. This might mean that you choose to incorporate the date into your invoice number for filing purposes, like this: 20172711-001. This would indicate that the invoice was created on November 27, 2017, and is the first invoice of the day.
      `,
    },
    {
      title: "How do i send an invoice?",
      content: `
      Now that you've generated your invoice, you have a couple options when it comes to sending it off to the customer:

      1. Send the invoice electronically via email, website, or HubSpot. 

      2. Send the invoice via postal mail. 

      For many businesses, electronic is the preferred sending method, as it allows you to deliver invoices to a customer in real time. Use HubSpot's Commerce Hub to quickly and seamlessly send invoices to your saved customers. 

      When sending an invoice by postal mail, make sure that you consider the time it will take for your invoice to arrive. While this tends to be the slower of the two options, many businesses still send invoices via postal mail to meet the needs and demands of their specific audiences.
      `,
    },
    {
      title: "Where can i find sample invoices for inspiration?",
      content: `
      Having a well-designed, professional invoice can make a big difference in the eyes of your customer and help you get paid on time.

      If you need help organizing all of the must-have information that comes on an invoice, use our tool above or download HubSpot's free invoice templates!
      `,
    },
    {
      title: "What makes an invoice legal?",
      content: `
      An invoice is a legal document and must include certain key information in order to be considered legal. Generally, invoices should include the customer’s name, address and contact details; an invoice number; a description of the goods and/or services sold; the quantity of each item; the total amount due indicated in both numerical and written form; any applicable tax rates applied to the sale; and the date the invoice was issued. Depending on the jurisdiction, additional information such as terms of payment or a unique customer identifier may also be required for an invoice to be considered legal.
      `,
    },
    {
      title: "Can i issue an invoice without VAT?",
      content: `
      In certain circumstances, it is possible to issue an invoice without VAT. This would generally be the case where the goods or services being invoiced are exempt from VAT, such as educational services or food products in some countries. Additionally, businesses which have an annual turnover below a certain threshold (which varies by country) may not be required to charge VAT on their invoices. It is important to check local laws and regulations when issuing an invoice so as to ensure that you are compliant with local tax requirements.
      `,
    },
  ];
  return (
    <Container mt={20}>
      <Title order={1} ta={"center"}>
        Invoice Generator FAQ
      </Title>
      <Accordion chevronPosition="left" mt={20}>
        {faq.map((item, index) => (
          <Accordion.Item
            key={index}
            value={item.title}
            className={AccordionContainer}
          >
            <Accordion.Control>
              <Text fz={16} fw={600}>
                {item.title}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>{item.content}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};
