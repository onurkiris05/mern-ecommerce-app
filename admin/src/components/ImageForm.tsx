import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

interface ImageFormProps {
  onChange: (file: File) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DropArea = styled.div<{ $isDragActive: boolean }>`
  width: 20rem;
  height: 10rem;
  border: 0.2rem dashed ${({ $isDragActive }) => ($isDragActive ? "#4CAF50" : "#bbb")};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  background-color: ${({ $isDragActive }) => ($isDragActive ? "#e8f5e9" : "#f9f9f9")};
  transition: 0.3s;

  &:hover {
    background-color: #f0f0f0;
    border-color: #888;
  }
`;

const PreviewImage = styled.img`
  width: 20rem;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
`;

function ImageForm({ onChange }: ImageFormProps) {
  const [preview, setPreview] = useState<string | undefined>();

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      // Setup preview image
      const fileReader = new FileReader();
      fileReader.onload = () => setPreview(fileReader.result as string);
      fileReader.readAsDataURL(acceptedFiles[0]);

      // Enrich image file name to prevent duplication
      const newFileName = `${new Date().getTime()}_${acceptedFiles[0].name}`;
      const updatedFile = new File([acceptedFiles[0]], newFileName, {
        type: acceptedFiles[0].type,
      });

      // Send updated image file
      onChange(updatedFile);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container>
      <DropArea {...getRootProps()} $isDragActive={isDragActive}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag & Drop an image here, or click to select</p>
        )}
      </DropArea>
      {preview && <PreviewImage src={preview} alt="preview" />}
    </Container>
  );
}

export default ImageForm;
