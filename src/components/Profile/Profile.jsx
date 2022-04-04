import PropTypes from 'prop-types';
import {
  ProfileUser,
  Description,
  AvatarUser,
  UserName,
  UserStats,
  UserStatsItem,
  Quantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileUser>
      <Description>
        <AvatarUser src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <UserStats>
        <UserStatsItem>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </UserStatsItem>
      </UserStats>
    </ProfileUser>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
