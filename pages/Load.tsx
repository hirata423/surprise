import { Box, Flex, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Load = () => {
  const router = useRouter();

  setTimeout(function () {
    router.push("/Top5"), [router];
  }, 2.5 * 1000);

  return (
    <>
      <Flex bgColor="black" minHeight="100vh" align="center" justify="center">
        <Stack align="center" spacing="30px">
          <Flex pt="50px">
            <Heading color="white">遅くなってすまない！</Heading>;
          </Flex>
          <Flex>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Load;
