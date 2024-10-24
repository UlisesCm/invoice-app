import { Box, Center, Container, Stack, Text, Title } from "@mantine/core";
import { InvoiceComponent } from "@/components/InvoiceComponent/InvoiceComponent";
import { HowToUseComponent } from "@/components/HowToUseComponent/HowToUseComponent";
import { InvoiceForYourBusiness } from "@/components/InvoiceForYourBusiness/InvoiceForYourBusiness";
import { InvoiceFeatures } from "@/components/InvoiceFeatures/InvoiceFeatures";
import { InvoiceFAQComponent } from "@/components/InvoiceFAQComponent/InvoiceFAQComponent";

export default function Home() {
  return (
    <Box>
      <Container h={384} bg={"rgb(33, 51, 67)"} fluid>
        <Center h={"100%"}>
          <Stack justify="center" align="center">
            <Title c={"white"} ta={"center"}>
              Invoice Generator
            </Title>
            <Text c={"white"} w={{ sm: 300, md: 600 }} lh={2}>
              {`
              Tired of manually creating invoices? Say hello to HubSpot's free
              online Invoice Generator! Make professional invoices that showcase
              your brand and impress your customers. Then, manage your invoice
              with the HubSpot invoice integration.
              `}
            </Text>
          </Stack>
        </Center>
      </Container>
      <InvoiceComponent />
      <HowToUseComponent />
      <InvoiceForYourBusiness />
      <InvoiceFeatures />
      <InvoiceFAQComponent />
    </Box>
  );
}
