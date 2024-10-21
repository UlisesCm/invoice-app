import { Box, Group, Text, TextInput } from "@mantine/core";
import React, { useContext } from "react";
import { DropzoneComponents } from "../DropzoneComponent/DropzoneComponents";
import { DropzoneContainer } from "@/app/[id]/home.css";
import { DateInput } from "@mantine/dates";
import { InvoiceContext } from "@/context/invoiceContext";

export const InfoComponent = () => {
  const { form } = useContext(InvoiceContext);
  const day = new Date().toISOString().split("T")[0];
  return (
    <Box w={"50%"} className={DropzoneContainer}>
      <DropzoneComponents />
      <Box>
        <Group>
          <Text>Invoice No:</Text>
          <TextInput
            placeholder="####"
            {...form?.getInputProps("invoice.no")}
          />
        </Group>
        <Group>
          <Text>Invoice Date:</Text>
          <DateInput
            placeholder={day}
            {...form?.getInputProps("invoice.date")}
          />
        </Group>
        <Group>
          <Text>Due Date:</Text>
          <DateInput
            placeholder={day}
            {...form?.getInputProps("invoice.dueDate")}
          />
        </Group>
      </Box>
    </Box>
  );
};
