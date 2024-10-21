import { Box, Group, Image, rem, Text } from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import React, { useContext, useState } from "react";
import { InvoiceContext } from "@/context/invoiceContext";

export const DropzoneComponents = (props: Partial<DropzoneProps>) => {
  const { form, url } = useContext(InvoiceContext);
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const preview = () => {
    if (files.length > 0 || url) {
      let imageUrl: string | null | undefined;
      let props;
      if (files.length > 0) {
        imageUrl = URL.createObjectURL(files[0]);
        props = {
          onLoad: () => URL.revokeObjectURL(imageUrl as string),
        };
      } else {
        imageUrl = url;
      }
      return <Image src={imageUrl} {...props} alt="company logo" />;
    } else {
      return null;
    }
  };
  return (
    <Box>
      <Dropzone
        onDrop={(files) => {
          setFiles(files);
          form?.setFieldValue("company.image", files[0]);
        }}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        style={{
          border: preview() ? "none" : "2px dashed var(--mantine-color-gray-4)",
        }}
        {...props}
      >
        <Group
          justify="center"
          gap="xl"
          mih={150}
          maw={200}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <div>
            {preview() ? (
              <>{preview()}</>
            ) : (
              <Text size="xl" inline>
                Drag & drop a logo file or click to upload
              </Text>
            )}
          </div>
        </Group>
      </Dropzone>
    </Box>
  );
};
