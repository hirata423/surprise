import { Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
const Top4 = () => {
  const router = useRouter();
  const yes = useCallback(() => router.push("/Top6"), [router]);
  return (
    <Flex bgColor="black" minHeight="100vh" align="center" justify="center">
      <Stack align="center" spacing="30px">
        <Heading color="white" fontSize="25px">
          その前に奥さんの
        </Heading>
        <Heading color="white" fontSize="25px">
          名前を教えてください
        </Heading>
        <Input placeholder="坂本佳花と入力する" color="white" h="50px" />

        <Button onClick={yes} bgColor="yellow" color="black">
          送信
        </Button>
      </Stack>
    </Flex>
  );
};
export default Top4;
