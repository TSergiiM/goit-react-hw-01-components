import styled from 'styled-components';
import { getRandomHexColor } from 'Utils/RandomhexColor';
export const SectionUploadStats = styled.section`
  max-width: 400px;
  text-align: center;
  background: grey;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 8px 8px 8px 8px;
  padding: 10px;
`;
export const TitleStats = styled.h2`
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  font-weight: bold;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  background: ${getRandomHexColor};
  margin-left: auto;
  padding: 15px;
  border-radius: 20%;
`;
export const StatLabel = styled.span`
  padding-bottom: 10px;
  font-size: 20px;
  color: white;
`;
