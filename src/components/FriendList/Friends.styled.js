import styled from 'styled-components';
export const FriendListStyle = styled.ul`
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  max-width: 350px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
`;
export const Status = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 12px;
  background: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const FriendAvatar = styled.img`
  border-radius: 50%;
  padding-right: 20px;
`;
export const FriendName = styled.p`
  font-weight: bold;
`;
