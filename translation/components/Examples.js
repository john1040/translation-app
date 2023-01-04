import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";

export default function ExampleSection() {
    return (
        <Container maxW="container.lg" id="examples">
            <Center p={4} minHeight="70vh">
                <VStack>
                    <Container maxW="container.md" textAlign="top">
                        <Heading size="2xl" mb={4} color="gray.700">
                            超精準翻譯
                        </Heading>

                        <Text fontSize="xl" color="gray.500" noOfLines={[1, 2]}>
                            AI Generated translation using advanced Natural Language Processing
                            自然語言模型生成的準確翻譯!
                        </Text>

                        <Text my={2} fontSize="sm" color="gray.500">
                            已為顧客翻譯超過100篇文章!
                        </Text>
                    </Container>
                </VStack>
            </Center>
        </Container>
    );
};