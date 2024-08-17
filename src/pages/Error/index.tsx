import NotFoundView from '@/components/ErrorPages/NotFound404';

type ErrorType = '400' | '401' | '403' | '404' | '500' | '503';
export interface ErrorPageProps {
  errorType: ErrorType;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorType }) => {
  switch (errorType) {
    // case '400':
    //   return <BadRequest400 />;
    // case '401':
    //   return <Unauthorized401 />;
    // case '403':
    //   return <Forbidden403 />;
    case '404':
      return <NotFoundView />;
      // case '500':
      //   return <ServerError500 />;
      // case '503':
      //   return <ServiceUnavailable503 />;
      // default:
      return <NotFoundView />;
  }
};
export default ErrorPage;
