import PropTypes from 'prop-types';
import {
  FriendItem,
  Status,
  FriendAvatar,
  FriendName,
} from 'components/FriendList/Friends.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status>{isOnline}</Status>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
