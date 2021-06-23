import { useState } from 'react';
import styled from 'styled-components';

const ImagePicker = () => {
  const [image, setImage] = useState('')

  console.log('imageimage: ', image);

  return (
    <StyledImagePicker>
      <StyledImageSelector>
        <label for="avatar">Choose an image to upload:</label>

        <input type="file"
          id="picture" name="picture"
          accept="image/png, image/jpeg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {image && <button onClick={() => setImage('')}>Remove Image</button>}
      </StyledImageSelector>
      <StyledImageScreen src={image}>Image to display</StyledImageScreen>
    </StyledImagePicker>
  );
}

export default ImagePicker;

const StyledImagePicker = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const StyledImageSelector = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageScreen = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  ${({ src }) => src && `background-image: url(${src})`};
  /* ${({ src }) => src && `background-color: green`} */
`;