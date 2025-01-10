import { useState } from 'react';
import { Fetcher, ReturnUseRequestType } from './types';

export function useRequest<RequestType, ResponseType>(
  fetcher: Fetcher<RequestType, ResponseType>,
  apiBaseUri: string
): ReturnUseRequestType<RequestType, ResponseType> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<ResponseType | null>(null);

  function onRequest(payload: RequestType) {
    setLoading(true);
    fetcher(apiBaseUri, payload)
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err);
      })
      .finally(() => setLoading(false));
  }

  return {
    loading,
    error,
    data,
    onRequest,
  };
}
