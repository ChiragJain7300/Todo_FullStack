import { Checkbox, Flex, IconButton, Input, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import useTodoStore from "../TodoContext";

function CreateTodo() {
  const toast = useToast();
  const [todo, setTodo] = useState("");
  const { createTodos } = useTodoStore();
  const handleCreateTodo = async () => {
    if (!todo) {
      toast({
        title: "Todo Missing",
        description: "Please enter all the contents",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      return;
    } else {
      console.log("vf");

      await createTodos({ content: todo });
      setTodo("");
    }
  };
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="flex-start"
      border="1px"
      borderColor="blue.700"
      borderRadius={5}
      py={4}
      px={5}
      gap={4}
      shadow="xl"
      mb={5}
    >
      <Checkbox size="lg" colorScheme="orange" disabled />
      <Input
        fontSize="xl"
        variant="unstyled"
        placeholder="Create a new Todo...."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <IconButton
        variant="ghost"
        colorScheme="grey"
        fontSize="16px"
        icon={<AddIcon />}
        onClick={handleCreateTodo}
      />
    </Flex>
  );
}

export default CreateTodo;
