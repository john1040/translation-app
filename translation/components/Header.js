// import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    chakra,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Image,
    Link,
    LinkBox,
    LinkOverlay,
    Spacer,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Features', link: '#features' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Examples', link: '#examples' },
    { name: 'playground', link: '/playground' }
]

const DesktopSidebarContents = ({ name }) => {
    return (
        <Container maxW={['full', 'container.lg']} p={0}>
            <Stack
                justify="space-between"
                p={[0, 4]}
                w="full"
                direction={['column', 'row']}
            >
                <Box display={{ base: 'none', md: 'flex' }}>
                    <Heading fontSize="xl">{name}</Heading>
                </Box>
                <Spacer />
                <Stack
                    align="flex-start"
                    spacing={[4, 10]}
                    direction={['column', 'row']}
                >
                    {navLinks.map((navLink, i) => {
                        return (
                            <Link
                                href={navLink.link}
                                key={`navlink_${i}`}
                                fontWeight={500}
                                variant="ghost"
                            >
                                {navLink.name}
                            </Link>
                        )
                    })}
                </Stack>
                <Spacer />
                <Button>登入</Button>
            </Stack>
        </Container>
    )
}
const MobileSidebar = ({ name }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex w="full" align="center">
                <Heading fontSize="xl">{name}</Heading>
                <Spacer />
                <IconButton
                    aria-label="Search database"
                    // icon={<HamburgerIcon />}
                    onClick={onOpen}
                />
                <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                    <DrawerOverlay />
                    <DrawerContent bg="gray.50">
                        <DrawerCloseButton />
                        <DrawerHeader>{name}</DrawerHeader>

                        <DrawerBody>
                            <DesktopSidebarContents />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </>
    )
}


const Sidebar = ({ name }) => {
    return (
        <chakra.header id="header">
            <Box display={{ base: 'flex', md: 'none' }} p={4}>
                <MobileSidebar name={name} />
            </Box>

            <Box display={{ base: 'none', md: 'flex' }} bg="gray.50">
                <DesktopSidebarContents name={name} />
            </Box>
        </chakra.header>
    )
}

export const Header = ({ name }) => {
    return (
        <Box w="full">
            <Sidebar name={name} />
        </Box>
    )
}