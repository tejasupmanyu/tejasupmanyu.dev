import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  opacity: 0.5;
  position: relative;
  border-radius: 6px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;

  svg {
    height: 24px;
    width: 24px;
  }
`;
