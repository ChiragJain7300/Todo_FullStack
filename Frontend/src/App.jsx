import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import sunImg from "./assets/images/icon-sun.svg";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
function App() {
  return (
    <Container
      w="full"
      minH="100vh"
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      py={10}
    >
      <Box minW="350px" w="500px">
        <VStack>
          <Flex justify="space-between" align="center" w="full" mb={8}>
            <Heading as="h1" textTransform="uppercase" letterSpacing={10}>
              Todo
            </Heading>
            <Box>
              <img src={sunImg} height="20px" width="20px" />
            </Box>
          </Flex>
          <CreateTodo />
          <DisplayTodo />

          <Text>Drag and Drop to render list</Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default App;
