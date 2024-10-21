import { Box, Group, Text, Textarea, TextInput } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import { ContainerStyle } from "./Footer.css";
import { InvoiceContext } from "@/context/invoiceContext";

export const FooterComponent = () => {
  const { form } = useContext(InvoiceContext);

  const { invoice } = form?.values ?? {};
  useEffect(() => {
    const price =
      form?.values?.table?.reduce(
        (total, item) =>
          total + Number(item.price ?? 0) * Number(item.quantity ?? 0),
        0,
      ) ?? 0;
    const subtotal = price;
    const discount = Number(form?.values.invoice.discount ?? 0);
    const tax = Number(form?.values.invoice.tax ?? 0);
    const total = price - discount + tax;
    form?.setFieldValue("invoice.total", total);
    form?.setFieldValue("invoice.subtotal", subtotal);
  }, [
    form?.values.table,
    form?.values.invoice.discount,
    form?.values.invoice.tax,
  ]);

  return (
    <Box className={ContainerStyle} mt={"xl"}>
      <Box>
        <Text>Notes:</Text>
        <Textarea
          placeholder="Any additional comments"
          {...form?.getInputProps("invoice.notes")}
        />
      </Box>
      <Box>
        <Group>
          <Text>Subtotal:</Text>
          <Text>${invoice?.subtotal}</Text>
        </Group>
        <Group>
          <Text>Tax:</Text>
          <TextInput
            placeholder="0"
            leftSection="$"
            {...form?.getInputProps("invoice.tax")}
          />
        </Group>
        <Group>
          <Text>Discount:</Text>
          <TextInput
            placeholder="0"
            leftSection="$"
            {...form?.getInputProps("invoice.discount")}
          />
        </Group>
        <Group>
          <Text>Total:</Text>
          <Text>${invoice?.total}</Text>
        </Group>
      </Box>
    </Box>
  );
};
