import {
    Container,
    Box,
    Center,
    Text,
    Wrap,
    WrapItem,
    Image,
    VStack,
    SimpleGrid,
    Flex,
    LinkBox,
    LinkOverlay,
    Spacer,
} from "@chakra-ui/react";
export default function Footer() {
    return (
        <>
            <Container maxW="container.lg">
                <Flex py={6}>
                    <Box>
                        <Text>© 2022 John Wang</Text>

                        <Text>Made by John Wang</Text>
                    </Box>
                    <Spacer />

                    <LinkBox>
                        <LinkOverlay href="https://twitter.com/john_____w" isExternal>
                            <Image src="twitter.svg" alt="Twitter logo"></Image>
                        </LinkOverlay>
                    </LinkBox>
                </Flex>
            </Container>
        </>
    )
}