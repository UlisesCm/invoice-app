import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "flex",
  justifyContent: "space-between",
});

export const DropzoneContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "end",
});
