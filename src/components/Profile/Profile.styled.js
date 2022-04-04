import styled from 'styled-components';
export const ProfileUser = styled.div`
  background-color: #f5f4fa;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  max-width: 250px;
`;
export const Description = styled.div`
  font-size: 16px;
`;
export const AvatarUser = styled.img`
  margin-top: 30px;
  max-width: 100px;
  background-color: aqua;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-weight: bold;
`;
export const UserStats = styled.ul`
  padding: 20px;
  display: flex;
  border-top: 1px solid;
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
