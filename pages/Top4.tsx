import { Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { ImWarning } from "react-icons/im";
const Top4 = () => {
  const [word, setWord] = useState<string>("");
  const wordChange = (e: any) => setWord(e.target.value);
  const router = useRouter();
  const submit = useCallback(() => router.push("/Top6"), [router]);

  const yes = () => {
    if (word === "約束します") {
      submit();
    } else {
      alert("ごみ");
    }
  };

  return (
    <Flex bgColor="black" minHeight="100vh" align="center" justify="center">
      <Stack align="center" spacing="20px">
        <Heading color="white">
          <ImWarning color="white" />
        </Heading>
        <Heading color="white" fontSize="25px">
          欲しい物は話し合って
        </Heading>
        <Heading color="white" fontSize="25px">
          決めると約束してください
        </Heading>
        <Flex color="white">※夫婦喧嘩はNGです</Flex>
        <Input
          placeholder="「約束します」と入力し誓う"
          color="white"
          h="50px"
          value={word}
          onChange={wordChange}
        />

        <Button onClick={yes} bgColor="yellow" color="black">
          送信
        </Button>
      </Stack>
    </Flex>
  );
};
export default Top4;
