import { CloseIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, IconButton, Text, useToast } from "@chakra-ui/react";
import React from "react";
import useTodoStore from "../TodoContext";

function Todo({ todo }) {
  const { deleteTodos, toggleComplete } = useTodoStore();
  const toast = useToast();
  const handleCompleteToggle = (id) => {
    toggleComplete(id);
  };
  const handleTodoDelete = async (id) => {
    const { success, message } = await deleteTodos(id);
    if (success) {
      toast({
        title: "Removal Successfull",
        description: message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
  };
  return (
    <Flex
      key={todo._id}
      w="full"
      align="center"
      justify="flex-start"
      borderBottom="1px"
      borderColor="blue.700"
      py={4}
      px={5}
      gap={4}
    >
      <Checkbox
        size="lg"
        colorScheme="orange"
        isChecked={todo.completed}
        onChange={() => handleCompleteToggle(todo._id)}
      />
      <Text
        as={todo.completed ? "del" : "p"}
        color={todo.completed ? "grey" : "white"}
      >
        {todo.content}
      </Text>
      <IconButton
        variant="ghost"
        colorScheme="grey"
        fontSize="14px"
        icon={<CloseIcon />}
        onClick={() => handleTodoDelete(todo._id)}
        ms="auto"
      />
    </Flex>
  );
}

export default Todo;
