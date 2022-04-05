import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendListStyle } from 'components/FriendList/Friends.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </FriendListStyle>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
