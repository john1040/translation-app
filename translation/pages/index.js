import { Header } from "../components/Header";
import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import { PricingSection } from "../components/PricingSection";
import { Container, Box, VStack, Text } from '@chakra-ui/react'
import { FAQSection } from "../components/FAQSection";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import ExampleSection from "../components/Examples";

export default function Landing() {
    return (
        <>
            <Layout>
                <Box bg="gray.50">
                    <HeroSection />
                    <ExampleSection />
                    <Highlights />
                    <Container py={28} maxW="container.lg" w="full" id="pricing">
                        <PricingSection />
                    </Container>
                    <Container py={28} maxW="container.md">
                        <Box w="full">
                            <VStack spacing={10} w="full">
                                <Text fontWeight={500} fontSize="2xl" align="center">
                                    Frequently asked questions
                                </Text>
                                <FAQSection />
                            </VStack>
                        </Box>
                    </Container>
                </Box>
            </Layout>

        </>
    )
}