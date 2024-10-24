import { InvoiceContext } from "@/context/invoiceContext";
import { Box, Group, Text, TextInput, Title } from "@mantine/core";
import React, { useContext } from "react";

export const CompanyAndClientComponent = () => {
  const { form } = useContext(InvoiceContext);
  return (
    <Box w={"50%"}>
      <Title c={"rgb(33, 51, 67)"}>Invoice</Title>
      <Box>
        <TextInput
          placeholder="Your Company"
          {...form?.getInputProps("company.companyName")}
          size="xl"
        />
        <Group>
          <TextInput
            placeholder="First Name"
            {...form?.getInputProps("company.firstName")}
          />
          <TextInput
            placeholder="Last Name"
            {...form?.getInputProps("company.lastName")}
          />
        </Group>
        <TextInput
          placeholder="Company Website"
          {...form?.getInputProps("company.companyWebsite")}
        />
        <TextInput
          placeholder="Company Address"
          {...form?.getInputProps("company.companyAddress")}
        />
        <TextInput
          placeholder="City, State ZIP"
          {...form?.getInputProps("company.cityStateZip")}
        />
        <TextInput
          placeholder="Country"
          {...form?.getInputProps("company.country")}
        />
        <TextInput
          placeholder="Phone No"
          {...form?.getInputProps("company.phoneNo")}
        />
        <TextInput
          placeholder="Email Address"
          {...form?.getInputProps("company.email")}
        />
      </Box>
      <Box>
        <TextInput
          placeholder="Client's Company"
          {...form?.getInputProps("client.clientCompany")}
          size="xl"
        />
        <Group>
          <TextInput
            placeholder="First Name"
            {...form?.getInputProps("client.clientFirstName")}
          />
          <TextInput
            placeholder="Last Name"
            {...form?.getInputProps("client.clientLastName")}
          />
        </Group>
        <TextInput
          placeholder="Client's Address"
          {...form?.getInputProps("client.clientAddress")}
        />
        <TextInput
          placeholder="City, State ZIP"
          {...form?.getInputProps("client.clientCityStateZip")}
        />
        <TextInput
          placeholder="Country"
          {...form?.getInputProps("client.clientCountry")}
        />
        <TextInput
          placeholder="Client's Email"
          {...form?.getInputProps("client.clientEmail")}
        />
      </Box>
    </Box>
  );
};
