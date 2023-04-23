import { useState, useEffect, useCallback } from 'react';
import { getInitialState } from '@/app';

export type InitialStateType = Awaited<ReturnType<typeof getInitialState>> | undefined;

const initState = {
  initialState: undefined as InitialStateType,
  loading: true,
  error: undefined,
};

export default () => {
  const [state, setState] = useState(initState);
  const refresh = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: undefined }));
    try {
      const ret = await getInitialState();
      setState((s) => ({ ...s, initialState: ret, loading: false }));
    } catch (e) {
      setState((s) => ({ ...s, error: e, loading: false }));
    }
  }, []);

  const setInitialState = useCallback(
    async (
      initialState: InitialStateType | ((initialState: InitialStateType) => InitialStateType),
    ) => {
      setState((s) => {
        if (typeof initialState === 'function') {
          return { ...s, initialState: initialState(s.initialState), loading: false };
        }
        return { ...s, initialState, loading: false };
      });
    },
    [],
  );

  useEffect(() => {
    refresh();
  }, []);

  return {
    ...state,
    refresh,
    setInitialState,
  };
};