import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import sunImg from "./assets/images/icon-sun.svg";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
import bgDeskImg from "./assets/images/bg-desktop-dark.jpg";
function App() {
  // bgImage={`url(${bgDeskImg})`} // Replace with your image path
  //     bgSize="cover" // Makes the background cover the container
  //     bgPosition="center" // Centers the background image
  //     bgRepeat="no-repeat" // Prevents tiling of the background
  return (
    <Container
      w="full"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={10}
      // bg={""} //hsl(235, 21%, 11%)
    >
      <Image
        src={bgDeskImg}
        position={"absolute"}
        top={0}
        left={0}
        zIndex={-15}
        w={"100vw"}
        h={"280px"}
      />
      <Box minW="400px" w="600px">
        <VStack mb="40px">
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
        </VStack>
        <Text align="center" color="grey">
          Drag and Drop to render list
        </Text>
      </Box>
    </Container>
  );
}

export default App;
