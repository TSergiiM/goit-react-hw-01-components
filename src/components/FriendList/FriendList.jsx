import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(Friend => (
        <FriendListItem
          key={Friend.id}
          name={Friend.name}
          avatar={Friend.avatar}
          isOnline={Friend.isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
