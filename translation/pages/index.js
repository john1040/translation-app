
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from "axios";
import { useState } from "react";
import { Button, Text, Flex, Box, FormControl, FormLabel, Input, FormHelperText, VStack, Center, Textarea } from '@chakra-ui/react';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/?text=${textInput}`)
      console.log(response)

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(JSON.parse(response.request.responseText).choices[0].text)
      setResult(JSON.parse(response.request.responseText).choices[0].text);
      setTextInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <>

      <Box bgColor='orange.100' height='100%'>
        <Center>
          <VStack width='80%'>
            <FormControl>
              <FormLabel>Content to be tanslated</FormLabel>
              <Textarea bgColor='white'
                type="text"
                name="translate"
                placeholder="Enter text to translate"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <Button onClick={onSubmit}>submit</Button>
            </FormControl>


            <Text fontSize='4xl'>
              output:
              {result}
            </Text>
          </VStack>
        </Center>
      </Box>
    </>
  )
}
