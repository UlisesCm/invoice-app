"use client";
import {
  Accordion,
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  ButtonProps,
  Container,
  Divider,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import { PropsWithChildren } from "react";
import { HeaderButtonContainer } from "./home.css";
import {
  IconSearch,
  IconUserFilled,
  IconGlobeFilled,
  IconMessages,
  IconChevronDown,
} from "@tabler/icons-react";
import Image from "next/image";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function Layout({ children }: PropsWithChildren) {
  const matches = useMediaQuery("(min-width: 56.25em)");
  const [opened, { toggle }] = useDisclosure();
  const bottomButtons: ButtonProps = {
    variant: "transparent",
    c: "rgb(33, 51, 67)",
  };
  const buttonProps: ButtonProps = {
    ...bottomButtons,
    size: "compact-sm",
  };

  const leftButton = [
    {
      title: "English",
      icon: <IconGlobeFilled />,
      rightIcon: <IconChevronDown />,
    },
    {
      title: "High Contrast",
      icon: null,
    },
    {
      title: "Customer Support",
      icon: <IconMessages />,
    },
    {
      title: "Contact Sales",
      icon: <IconUserFilled />,
    },
  ];
  return (
    <AppShell>
      <AppShell.Header m={0} p={0}>
        <Group justify="space-between" p={10}>
          {!matches && (
            <Box w={100} h={29}>
              <Image
                src={"./logo.svg"}
                alt="hutSpot Logo"
                width={100}
                height={29}
              />
            </Box>
          )}
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="lg" />
        </Group>
        {opened && (
          <Box p={20}>
            <TextInput
              styles={{ input: { border: "1px solid" } }}
              leftSection={<IconSearch />}
              placeholder="Search HubSpot.com"
              size="md"
            />
            <Accordion>
              <Accordion.Item value="Products">
                <Accordion.Control>Products</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="Solutions">
                <Accordion.Control>Solutions</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="Pricing">
                <Accordion.Control>Pricing</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="Resources">
                <Accordion.Control>Resources</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="About">
                <Accordion.Control>Resources</Accordion.Control>
              </Accordion.Item>
            </Accordion>
            <Divider my="md" />
            <Button fullWidth color="rgb(255, 92, 53)" aria-label="Get a demo">
              Get a demo
            </Button>
            <Button
              fullWidth
              color="rgb(255, 92, 53)"
              variant="outline"
              mt={"md"}
              aria-label="Get started free"
            >
              Get started free
            </Button>
            <Divider my="md" />
            <Button fullWidth color="rgb(33, 51, 67)" aria-label="Login">
              Login
            </Button>
            <Divider my="md" />
            <Accordion>
              <Accordion.Item value="English">
                <Accordion.Control>English</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="High Contrast">
                <Accordion.Control>High Contrast</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="Customer Support">
                <Accordion.Control>Customer Support</Accordion.Control>
              </Accordion.Item>
              <Accordion.Item value="Contact Sales">
                <Accordion.Control>Resources</Accordion.Control>
              </Accordion.Item>
            </Accordion>
          </Box>
        )}
        {matches && (
          <Container>
            <Group h={52} justify="space-between">
              <Box className={HeaderButtonContainer}>
                {leftButton.map((button, index) => (
                  <Button
                    key={index}
                    leftSection={button.icon}
                    rightSection={button.rightIcon && button.rightIcon}
                    {...buttonProps}
                    aria-label={button.title}
                  >
                    <Text fz={12} fw={"bold"}>
                      {button.title}
                    </Text>
                  </Button>
                ))}
              </Box>
              <Box className={HeaderButtonContainer}>
                <ActionIcon variant="transparent">
                  <IconSearch
                    stroke={1.5}
                    color="rgb(33, 51, 67)"
                    aria-label="icon search"
                  />
                </ActionIcon>
                <Button {...buttonProps} aria-label="Log in">
                  <Text fz={12} fw={"bold"}>
                    Log in
                  </Text>
                </Button>
                <Button
                  {...buttonProps}
                  rightSection={<IconChevronDown stroke={1.2} />}
                  aria-label="About"
                >
                  <Text fz={12} fw={"bold"}>
                    About
                  </Text>
                </Button>
              </Box>
            </Group>
            <Group h={65} justify="space-between">
              <Box className={HeaderButtonContainer}>
                <Box w={100} h={29}>
                  <Image
                    src={"./logo.svg"}
                    alt="hutSpot Logo"
                    width={100}
                    height={29}
                  />
                </Box>
                <Button
                  {...bottomButtons}
                  rightSection={<IconChevronDown />}
                  aria-label="Products"
                >
                  Products
                </Button>
                <Button
                  {...bottomButtons}
                  rightSection={<IconChevronDown />}
                  aria-label="Solutions"
                >
                  Solutions
                </Button>
                <Button {...bottomButtons} aria-label="Pricing">
                  Pricing
                </Button>
                <Button
                  {...bottomButtons}
                  rightSection={<IconChevronDown />}
                  aria-label="Resources"
                >
                  Resources
                </Button>
              </Box>
              <Button
                radius={8}
                size="md"
                color={"rgb(255, 92, 53)"}
                aria-label=" Start free or get a demo"
              >
                Start free or get a demo
              </Button>
            </Group>
          </Container>
        )}
      </AppShell.Header>
      <AppShell.Main py={115}>{children}</AppShell.Main>
    </AppShell>
  );
}
