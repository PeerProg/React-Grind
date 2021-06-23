import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Spacer from './spacer';

const ImagePicker = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [filename, setFilename] = useState(null);

  const fileInputRef = useRef();

  const handleFileSelection = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageSrc(reader.result);
      setFilename(file.name);
    };
  };

  const handleButtonClick = e => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <StyledImagePicker>
      <StyledImageSelector>
        <StyledButton onClick={handleButtonClick}>Upload a file</StyledButton>

        <input
          type="file"
          ref={fileInputRef}
          id="picture"
          name="picture"
          accept="image/png, image/jpeg"
          onChange={handleFileSelection}
          style={{ display: 'none' }}
        />

        {imageSrc && (
          <>
            <Spacer height={15} />
            <StyledButton
              onClick={() => {
                setImageSrc('');
                setFilename(null);
              }}
              plain
            >
              Remove Image
            </StyledButton>
          </>
        )}
      </StyledImageSelector>
      <Spacer width={40} />
      <div>
        <StyledImageScreen src={imageSrc} />
        {filename && <p>{filename}</p>}
      </div>
    </StyledImagePicker>
  );
};

export default ImagePicker;

const StyledImagePicker = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const StyledImageSelector = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 140px;
  background-color: blue;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  border: none;
  ${({ plain }) =>
    plain &&
    css`
      background-color: red;
      color: black;
    `};
`;

const StyledImageScreen = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  ${({ src }) => src && `background-image: url(${src})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-clip: border-box;
`;
