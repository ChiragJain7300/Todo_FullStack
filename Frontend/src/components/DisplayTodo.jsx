import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useTodoStore from "../TodoContext.js";
import Todo from "./Todo.jsx";
function DisplayTodo() {
  const toast = useToast();
  const { todos, getTodos, deleteTodos } = useTodoStore();
  useEffect(() => {
    getTodos();
  }, [todos]);
  const handleClearCompleted = () => {
    todos.map((todo) => (todo.completed ? deleteTodos(todo._id) : null));
  };
  return (
    <Container
      w="full"
      p={0}
      border="1px"
      borderColor="blue.700"
      borderRadius={5}
      shadow="xl"
    >
      {todos.length > 0 ? (
        todos.map((todo) => <Todo todo={todo} />)
      ) : (
        <Text>No Todos Yet</Text>
      )}
      <Flex
        w="full"
        py={4}
        px={5}
        color={"grey"}
        align={"center"}
        justify={"space-between"}
      >
        <Box>{todos.length} items left</Box>
        <Button variant="link" onClick={handleClearCompleted}>
          Clear Completed
        </Button>
      </Flex>
    </Container>
  );
}

export default DisplayTodo;
