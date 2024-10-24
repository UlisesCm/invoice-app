import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import { Center } from "@mantine/core";

export const InvoiceFeatures = () => {
  const features = [
    {
      title: "Invoice",
      description:
        "Create, send, and monitor professional invoices within the HubSpot invoice integration. Consolidate invoicing, payments, and quoting in one place. ",
      src: "https://www.hubspot.com/hs-fs/hubfs/2023_Pay_Slip-1.png?width=150&height=150&name=2023_Pay_Slip-1.png",
    },
    {
      title: "Payments",
      description:
        "Expedite payments by easily generating and distributing payment links. Share links across customer touchpoints like emails, websites, forms, and meetings.",
      src: "https://www.hubspot.com/hs-fs/hubfs/2023_SalesHub_Payments2-1.png?width=150&height=151&name=2023_SalesHub_Payments2-1.png",
    },
    {
      title: "Quotes",
      description:
        "Generate branded sales quotes, collect payments and electronic signatures within quotes, and automatically populate quotes with information from HubSpot’s Smart CRM.",
      src: "https://www.hubspot.com/hs-fs/hubfs/2023_CRM_Customer_Profiles1-1.png?width=150&height=150&name=2023_CRM_Customer_Profiles1-1.png",
    },
    {
      title: "Revenue Reporting",
      description:
        "Analyze total gross revenue, top products, and top-performing sales reps with comprehensive revenue reporting. Customize your reports for additional insights.",
      src: "https://www.hubspot.com/hs-fs/hubfs/2023_Data_Monitoring3-4.png?width=150&height=150&name=2023_Data_Monitoring3-4.png",
    },
  ];
  return (
    <Box>
      <Box bg={"rgb(33, 51, 67)"} p={16}>
        <Container>
          <Title c={"white"} ta={"center"}>
            Manage your invoice with Commerce Hub
          </Title>
        </Container>
      </Box>
      <Box bg={"#f6f9fc"} p={25}>
        <Container>
          <Text ta={"center"}>
            Explore additional features for managing your invoice in HubSpot:
          </Text>
        </Container>
      </Box>
      <Box>
        <Container>
          <SimpleGrid cols={{ sm: 1, md: 4 }} my={30}>
            {features.map((feature, index) => (
              <Stack key={index}>
                <Box w={150} h={150}>
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    width={150}
                    height={150}
                  />
                </Box>
                <Title fz={18}>{feature.title}</Title>
                <Text>{feature.description}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box bg={"rgb(33, 51, 67)"} p={30}>
        <Center>
          <Button size="lg" bg={"white"} radius={8} c={"rgb(33, 51, 67)"}>
            Create my invoice
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
