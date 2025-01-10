type TRoute = {
  path: string;
  element: React.ReactNode;
};

export type RoutesProps = {
  routes: TRoute[];
};
