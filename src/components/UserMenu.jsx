import { useUser } from 'path/to/userContext.js';

export const UserMenu = () => {
  const { username } = useUser();

  return (
    <div>
      <p>{username}</p>
    </div>
  );
};
