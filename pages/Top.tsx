import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useCallback } from "react";
import { ImWarning } from "react-icons/im";
import { useRouter } from "next/router";

const Top = () => {
  const router = useRouter();
  const yes = useCallback(() => router.push("/Top2"), [router]);

  return (
    //test
    <Flex bgColor="black" minHeight="100vh" pt="80px" justify="center">
      <Stack align="center" spacing="30px">
        <Heading color="white">
          <ImWarning color="white" />
        </Heading>
        <Stack align="center">
          <Heading color="white">あなた達は</Heading>
          <Heading color="white">坂本夫婦ですか？</Heading>
        </Stack>

        <Button onClick={yes} bgColor="yellow" color="black">
          はい
        </Button>
      </Stack>
    </Flex>
  );
};
export default Top;
