import {
  Box,
  Button,
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import React from "react";

export const InvoiceForYourBusiness = () => {
  return (
    <Box bg={"#f6f9fc"}>
      <Container p={50}>
        <SimpleGrid cols={{ sm: 1, md: 2 }}>
          <Box w={380} h={399}>
            <Image
              src={
                "https://www.hubspot.com/hs-fs/hubfs/screenshot_2024-09-09_at_3.40.09___pm.png?width=380&height=399&name=screenshot_2024-09-09_at_3.40.09___pm.png"
              }
              alt="Invoice example"
              width={380}
              height={399}
            />
          </Box>
          <Stack>
            <Title>{"A custom invoice for your business"}</Title>
            <Text>
              {`
              Customize your invoice by adding your business details, logo, and
              changing the colors to fit your business branding. Stand out from
              the competition with tailored invoices that reflect your
              professional identity.
              `}
            </Text>
            <Text>
              {`
              Whether you're a small business owner or an enterprise, Invoice
              Generator allows you to effortlessly generate professional
              invoices to impress your clients. Focus on what you do best and
              leave the invoicing design to us.
              `}
            </Text>
          </Stack>
        </SimpleGrid>
        <Center mt={30}>
          <Button size="lg" color={"rgb(255, 92, 53)"} radius={8}>
            Create my invoice
          </Button>
        </Center>
      </Container>
    </Box>
  );
};
