import { Box, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

interface ErrorPageProps {}

const ErrorPage: FunctionComponent<ErrorPageProps> = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error occurred.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
