import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useTodoStore from "../TodoContext.js";
import Todo from "./Todo.jsx";
function DisplayTodo() {
  const [todoFilter, setTodoFilter] = useState("all");
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
      boxShadow="2xl"
      bg={"hsl(235, 24%, 19%)"}
    >
      {todos.length > 0 ? (
        todoFilter === "all" ? (
          todos.map((todo) => <Todo todo={todo} />)
        ) : todoFilter === "completed" ? (
          todos.map((todo) =>
            todo.completed === true ? <Todo todo={todo} /> : null
          )
        ) : (
          todos.map((todo) =>
            todo.completed !== true ? <Todo todo={todo} /> : null
          )
        )
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
        <HStack gap={5}>
          <Button
            color={todoFilter === "all" ? "blue.300" : "grey"}
            variant="link"
            onClick={() => setTodoFilter("all")}
            _hover={{
              color: "blue.300",
              textDecoration: "underline",
            }}
          >
            All
          </Button>
          <Button
            color={todoFilter === "active" ? "blue.300" : "grey"}
            variant="link"
            onClick={() => setTodoFilter("active")}
            _hover={{
              color: "blue.300",
              textDecoration: "underline",
            }}
          >
            Active
          </Button>
          <Button
            color={todoFilter === "completed" ? "blue.300" : "grey"}
            variant="link"
            onClick={() => setTodoFilter("completed")}
            _hover={{
              color: "blue.300",
              textDecoration: "underline",
            }}
          >
            Completed
          </Button>
        </HStack>
        <Button variant="link" onClick={handleClearCompleted}>
          Clear Completed
        </Button>
      </Flex>
    </Container>
  );
}

export default DisplayTodo;
