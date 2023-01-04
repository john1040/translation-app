import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
export const PricingBox = ({
  pro,
  name,
  isBilledAnnually,
}) => {
  return (
    <Box
      boxShadow="sm"
      p={6}
      rounded="lg"
      bg={pro ? 'white' : 'white'}
      borderColor={pro ? 'brand.500' : 'gray.200'}
      backgroundColor={pro ? 'brand.50' : 'white'}
      borderWidth={2}
    >
      <VStack spacing={3} align="flex-start">
        <Text fontWeight={600} casing="uppercase" fontSize="sm">
          {name}
        </Text>
        <Box w="full">
          {isBilledAnnually ? (
            <Text fontSize="3xl" fontWeight="medium">
              $0.2
            </Text>
          ) : (
            <Text fontSize="3xl" fontWeight="medium">
              $0.5
            </Text>
          )}
          <Text fontSize="sm">每字</Text>
        </Box>

        {/* <Text>Unlock key features and higher usage limits</Text>
        <VStack>
          <Button size="sm" colorScheme="brand">
            Free 14-day trial →
          </Button>
        </VStack> */}

        <VStack pt={8} spacing={4} align="flex-start">
          <Text fontWeight="medium">Everything in Basic, plus:</Text>
          <List spacing={3}>
            <ListItem>
              <VStack align="flex-start" spacing={1}>

                <HStack align="flex-start" spacing={1}>
                  {pro ?
                    <>
                      <Text>
                        <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                        手動校正，多一層保障
                      </Text>
                    </>

                    : null}
                </HStack>
                <HStack align="flex-start" spacing={1}>
                  <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                  <Text>
                    精準的翻譯
                  </Text>
                </HStack>
              </VStack>

            </ListItem>
          </List>
        </VStack>
      </VStack>
    </Box>
  )
}

export const PricingSection = () => {
  const [isBilledAnnually, setIsBilledAnnually] = useState(true)
  return (
    <VStack spacing={10} align="center">
      <ButtonGroup isAttached>
        <Button
          onClick={() => {
            setIsBilledAnnually(true)
          }}
          colorScheme={isBilledAnnually ? 'brand' : 'gray'}
        >
          Annually (-10%)
        </Button>

        <Button
          onClick={() => {
            setIsBilledAnnually(false)
          }}
          colorScheme={isBilledAnnually ? 'gray' : 'brand'}
        >
          Monthly
        </Button>
      </ButtonGroup>

      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <PricingBox
          pro={false}
          name="基本"
          isBilledAnnually={isBilledAnnually}
        />

        <PricingBox
          pro={true}
          name="專業"
          isBilledAnnually={isBilledAnnually}
        />

        {/* <PricingBox
          pro={false}
          name="Enterprise"
          isBilledAnnually={isBilledAnnually}
        /> */}
      </SimpleGrid>
    </VStack>
  )
}