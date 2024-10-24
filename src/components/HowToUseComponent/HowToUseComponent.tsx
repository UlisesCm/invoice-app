import { Box, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export const HowToUseComponent = () => {
  return (
    <Box bg={"rgb(33, 51, 67)"} py={30}>
      <Stack justify="center" align="center">
        <Title c={"white"} w={{ sm: 200, md: 600 }} ta={"center"}>
          {"How to Use HubSpot's Free Online Invoice Generator"}
        </Title>
        <Text c={"white"} w={{ sm: 200, md: 600 }} lh={2}>
          {`
          Use this free online invoice generator to create your very own
          professional invoice. Once you're done, upload the invoice to HubSpot
          to effectively manage it and distribute it to customers.
          `}
        </Text>
        <Text c={"white"} w={{ sm: 200, md: 600 }}>
          {`
          1. Create your professional invoice by filling out each field in the
          template above.
          `}
        </Text>
        <Text c={"white"} w={{ sm: 200, md: 600 }}>
          {`
          2. Download the PDF or upload your invoice to HubSpot's revenue tools.
          `}
        </Text>
        <Text c={"white"} w={{ sm: 200, md: 600 }} lh={2}>
          {`
          3. Manage this invoice and any future invoices with the HubSpot
          invoice integration. You can send it to customers, process payments,
          and analyze your revenue – all within the CRM.
          `}
        </Text>
        <Text c={"white"} w={{ sm: 200, md: 600 }} lh={2}>
          {`
            Make full use of HubSpot's Commerce Hub to streamline your business
          billing. Unlock other easy-to-use features such as quotes, billing
          automation, and revenue reporting, and more.
            `}
        </Text>
        <Box w={{ sm: 200, md: 710 }} h={399} mt={10}>
          <Image
            src={
              "https://www.hubspot.com/hs-fs/hubfs/Copy%20of%20Company%20News%20Blog%20Hero%20(3).png?width=1220&height=686&name=Copy%20of%20Company%20News%20Blog%20Hero%20(3).png"
            }
            alt="HubSpot Invoice Generator"
            width={710}
            height={399}
            loading="lazy"
          />
        </Box>
      </Stack>
    </Box>
  );
};
