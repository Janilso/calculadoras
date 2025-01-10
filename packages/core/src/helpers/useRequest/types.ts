type OnRequestType<RequestType> = (payload: RequestType) => void;

export interface ReturnUseRequestType<RequestType, ResponseType> {
  loading: boolean;
  error: unknown;
  data: ResponseType | null;
  onRequest: OnRequestType<RequestType>;
}

export type Fetcher<RequestType, ResponseType> = (
  apiUri: string,
  payload: RequestType
) => Promise<ResponseType>;
