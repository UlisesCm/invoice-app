"use client";
import { Box, Button, Container, Group, Image, Paper } from "@mantine/core";
import React, { useRef } from "react";
import { CompanyAndClientComponent } from "../CompanyAndClientComponent/CompanyAndClientComponent";
import { InfoComponent } from "../InfoComponent/InfoComponent";
import { TableComponent } from "../TableComponent/TableComponent";
import { FooterComponent } from "../FooterIComponent/FooterComponent";
import { useRouter } from "next/navigation";
import { InvoiceProvider } from "@/context/invoiceContext";
import { ContainerStyle } from "../FooterIComponent/Footer.css";
import { FloatButton } from "./InvoiceComponent.css";
import { useMediaQuery } from "@mantine/hooks";

export const InvoiceComponent = () => {
  const route = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width: 56.25em)");
  const handleNew = () => {
    route.push("/new");
  };

  return (
    <InvoiceProvider contentRef={contentRef}>
      {matches && (
        <Box w={80} h={80} className={FloatButton} onClick={handleNew}>
          <Image
            alt="hubSpot tools"
            src={
              "https://cdn2.hubspot.net/hubfs/53/invoice%20generator/toolset.svg"
            }
          />
        </Box>
      )}

      <Container>
        <Paper shadow="sm" withBorder p="xl" my="sm" ref={contentRef}>
          <Box className={ContainerStyle}>
            <CompanyAndClientComponent />
            <InfoComponent />
          </Box>
          <TableComponent />
          <FooterComponent />
        </Paper>
        <Group mt={"xl"} justify="end">
          <Button
            type="button"
            size="lg"
            color={"rgb(255, 92, 53)"}
            onClick={handleNew}
            radius={8}
            aria-label="Share your invoice using HubSpot"
          >
            Share your invoice using HubSpot
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="outline"
            color={"rgb(255, 92, 53)"}
            radius={8}
            aria-label="Download Now"
          >
            Download Now
          </Button>
        </Group>
      </Container>
    </InvoiceProvider>
  );
};
