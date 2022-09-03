import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
const Top4 = () => {
  const [word, setWord] = useState<string>("");
  const wordChange = (e: any) => setWord(e.target.value);
  const router = useRouter();
  const submit = useCallback(() => router.push("/Load"), [router]);

  const yes = () => {
    if (word !== "すきかもしれんな〜") {
      alert("文字が適切ではありませんよ！しっかり！");
      setWord("");
    }
    if (word === "すきかもしれんな〜") {
      submit();
    }
  };

  return (
    <Flex bgColor="black" minHeight="100vh" align="center" justify="center">
      <Stack align="center" spacing="30px">
        <Heading color="white" fontSize="25px">
          告白の言葉を教えてください
        </Heading>
        <Input
          placeholder="ヒント：「しれんな〜(を含む9文字)」"
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