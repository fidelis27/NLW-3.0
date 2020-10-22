import React, { createContext, useState, useContext, useCallback } from 'react';

import api from '../services/api';

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: UserData;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: UserData;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: UserData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const userStorage = localStorage.getItem('@happy:user');
    const tokenStorage = localStorage.getItem('@happy:token');

    if (tokenStorage && userStorage) {
      return { token: tokenStorage, user: JSON.parse(userStorage) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('session', { email, password });

    const { token, user } = response.data;
    localStorage.setItem('@happy:user', JSON.stringify(user));
    localStorage.setItem('@happy:token', token);

    // eslint-disable-next-line dot-notation
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@happy:user');
    localStorage.removeItem('@happy:token');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: UserData) => {
      localStorage.setItem('@happy:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{
        signed: !!data.user,
        user: data.user,
        signOut,
        signIn,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};
