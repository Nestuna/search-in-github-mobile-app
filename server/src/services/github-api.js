import fetch from 'cross-fetch'

export const fetchUser = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}`);
  return await user.json()
};
