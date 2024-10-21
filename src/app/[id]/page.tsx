"use client";
import { Box, Button, Container, Group, Paper } from "@mantine/core";
import { Container as ContainerStyle } from "./home.css";
import { InvoiceProvider } from "@/context/invoiceContext";
import { CompanyAndClientComponent } from "@/components/CompanyAndClientComponent/CompanyAndClientComponent";
import { InfoComponent } from "@/components/InfoComponent/InfoComponent";
import { TableComponent } from "@/components/TableComponent/TableComponent";
import { FooterComponent } from "@/components/FooterIComponent/FooterComponent";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const handleNew = () => {
    route.push("/new");
  };
  return (
    <InvoiceProvider contentRef={contentRef}>
      <Container>
        <Group mt={"sm"}>
          <Button type="submit">Download Now</Button>
          <Button type="button" variant="light" onClick={handleNew}>
            Create New
          </Button>
        </Group>
        <Paper shadow="sm" withBorder p="xl" my="sm" ref={contentRef}>
          <Box className={ContainerStyle}>
            <CompanyAndClientComponent />
            <InfoComponent />
          </Box>
          <TableComponent />
          <FooterComponent />
        </Paper>
      </Container>
    </InvoiceProvider>
  );
}
