import { useState, useCallback } from 'react';

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

const useGitHubData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (searchTerm: string) => {
    if (searchTerm === '') {
      alert('Please enter something');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${searchTerm}`);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        alert('User not found');
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, search };
};

export default useGitHubData;