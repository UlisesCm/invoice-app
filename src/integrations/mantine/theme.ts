"use client";

import { createTheme, MantineSize, Textarea, TextInput } from "@mantine/core";
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
  },
});
export const vars = themeToVars(theme);
