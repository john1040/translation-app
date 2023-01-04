import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react'

const items = [
    {
        q: '你們翻譯的價格多少?',
        a: '不論字數類型，一字0.5元!',
    },
    {
        q: '我為甚麼不用Google 翻譯就好?',
        a: '我們的翻譯是使用比Google翻譯更先進的演算法, 翻譯的成果有顯著的差別!',
    },
    {
        q: '如果我對翻譯的成果不滿意怎麼辦?',
        a: '沒關係! 只要24小時提出不滿意的具體原因, 我們可以為您修改!',
    },
    {
        q: '我有其他問題，要如何聯絡客服?',
        a: '我們的客服是 ilcf1u@gmail.com ',
    },
]

export const FAQSection = ({ }) => {
    return (
        <Box borderRadius="lg" w="full" p={4}>
            <Accordion allowToggle >
                {items.map((item, i) => {
                    return (
                        <AccordionItem key={`faq_${i}`}>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {item.q}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>

                            <AccordionPanel pb={4}>{item.a}</AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Box>
    )
}