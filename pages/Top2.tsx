import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { ImWarning } from "react-icons/im";
import { useRouter } from "next/router";
import { useCallback } from "react";
const Top2 = () => {
  const router = useRouter();
  const yes = useCallback(() => router.push("/Top3"), [router]);
  return (
    <Flex bgColor="black" minHeight="100vh" align="center" justify="center">
      <Stack align="center" spacing="30px">
        <Heading color="white">
          <ImWarning color="white" />
        </Heading>
        <Heading color="white">欲しい物はありますか？</Heading>
        <Button onClick={yes} bgColor="yellow" color="black">
          はい
        </Button>
      </Stack>
    </Flex>
  );
};
export default Top2;
