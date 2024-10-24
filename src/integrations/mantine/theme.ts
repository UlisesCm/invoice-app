"use client";

import {
  createTheme,
  MantineSize,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { themeToVars } from "@mantine/vanilla-extract";

const inputStyleProps = {
  defaultProps: {
    size: "sm" as MantineSize,
  },
  styles: () => ({
    input: {
      border: "none",
    },
  }),
};

export const theme = createTheme({
  components: {
    TextInput: TextInput.extend(inputStyleProps),
    Textarea: Textarea.extend(inputStyleProps),
    DateInput: DateInput.extend(inputStyleProps),
    Text: Text.extend({
      defaultProps: {
        c: "rgb(33, 51, 67)",
      },
    }),
    Title: Text.extend({
      defaultProps: {
        c: "rgb(33, 51, 67)",
      },
    }),
  },
});
export const vars = themeToVars(theme);
