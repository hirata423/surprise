import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { ImWarning } from "react-icons/im";
import { useRouter } from "next/router";
import { useCallback } from "react";
const Top3 = () => {
  const router = useRouter();
  const yes = useCallback(() => router.push("/Top4"), [router]);
  return (
    <Flex bgColor="black" minHeight="100vh" align="center" justify="center">
      <Stack align="center" spacing="30px">
        <Heading color="white">
          <ImWarning color="white" />
        </Heading>
        <Heading color="white" fontSize="25px">
          今日買え
        </Heading>
        <Button onClick={yes} bgColor="yellow" color="black">
          わかった
        </Button>
      </Stack>
    </Flex>
  );
};
export default Top3;
