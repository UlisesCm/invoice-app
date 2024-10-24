import { InvoiceContext, itemProps } from "@/context/invoiceContext";
import { ActionIcon, Box, Button, Table, TextInput } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React, { useContext, useState } from "react";
import { useHover } from "@mantine/hooks";

export const TableComponent = () => {
  const { form } = useContext(InvoiceContext);
  const { hovered, ref } = useHover();
  const { table } = form?.values ?? {};
  const [id, setId] = useState(2);

  const rows = table?.map((element: itemProps, index) => (
    <Table.Tr key={element.itemId}>
      <Table.Td>
        <TextInput
          placeholder={element.itemId.toString()}
          {...form?.getInputProps(`table.${index}.itemId`)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          placeholder={"item description"}
          {...form?.getInputProps(`table.${index}.description`)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          placeholder={"0"}
          {...form?.getInputProps(`table.${index}.quantity`)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          placeholder={"0"}
          leftSection="$"
          {...form?.getInputProps(`table.${index}.price`)}
        />
      </Table.Td>
      <Table.Td>
        {hovered ? (
          <ActionIcon
            radius={"xl"}
            onClick={() => element?.id && removeItem(element?.id)}
            w={20}
            color="rgb(255, 92, 53)"
            aria-label="remove item"
          >
            <IconX />
          </ActionIcon>
        ) : (
          <Box w={25} />
        )}
      </Table.Td>
    </Table.Tr>
  ));

  const addItem = () => {
    const newId = id + 1;
    setId(newId);
    const newItem: itemProps = {
      itemId: id,
      description: "",
      quantity: 1,
      price: 0,
    };
    form?.setFieldValue("table", [...(table || []), newItem]);
  };

  const removeItem = (id: string) => {
    const newTable = table?.filter((item) => item?.id !== id);
    form?.setFieldValue("table", newTable || []);
  };

  return (
    <Box ref={ref}>
      <Table mt={"xl"}>
        <Table.Thead>
          <Table.Tr bg={"rgb(33, 51, 67)"}>
            <Table.Th c={"white"}>ID</Table.Th>
            <Table.Th c={"white"}>Description</Table.Th>
            <Table.Th c={"white"}>Quantity</Table.Th>
            <Table.Th c={"white"}>Price</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      {hovered && (
        <Button
          onClick={addItem}
          fullWidth
          mt={"xs"}
          color="rgb(255, 92, 53)"
          radius={0}
        >
          Add Item
        </Button>
      )}
    </Box>
  );
};
