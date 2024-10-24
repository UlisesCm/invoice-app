"use client";
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  ButtonProps,
  Container,
  Group,
  Text,
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
                  >
                    <Text fz={12} fw={"bold"}>
                      {button.title}
                    </Text>
                  </Button>
                ))}
              </Box>
              <Box className={HeaderButtonContainer}>
                <ActionIcon variant="transparent">
                  <IconSearch stroke={1.5} color="rgb(33, 51, 67)" />
                </ActionIcon>
                <Button {...buttonProps}>
                  <Text fz={12} fw={"bold"}>
                    Log in
                  </Text>
                </Button>
                <Button
                  {...buttonProps}
                  rightSection={<IconChevronDown stroke={1.2} />}
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
                <Button {...bottomButtons} rightSection={<IconChevronDown />}>
                  Products
                </Button>
                <Button {...bottomButtons} rightSection={<IconChevronDown />}>
                  Solutions
                </Button>
                <Button {...bottomButtons}>Pricing</Button>
                <Button {...bottomButtons} rightSection={<IconChevronDown />}>
                  Resources
                </Button>
              </Box>
              <Button radius={8} size="md" color={"rgb(255, 92, 53)"}>
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
