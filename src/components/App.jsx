import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
    </div>
  );
};
