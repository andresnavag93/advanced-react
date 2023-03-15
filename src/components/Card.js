import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="md"
      borderColor="gray.200"
      backgroundColor="white"
      spacing={4}
      alignItems="flex-start"
      boxShadow="md"
      color="black"
    >
      <Image src={imageSrc} borderRadius="md" />
      <Heading size="md" paddingX={4}>{title}</Heading>
      <Text paddingX={4}>{description}</Text>
      <HStack paddingX={4} paddingBottom={4} >
        <Text fontWeight="bold">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>)
};

export default Card;
