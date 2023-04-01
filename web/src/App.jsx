import {useState} from 'react'
import reactLogo from './assets/react.svg'
import {
    Code,
    Input,
    Button,
    Box,
    Text,
    Spinner,
    VStack
} from '@chakra-ui/react';
import './App.css'

function App() {
    const [loading, setLoading] = useState(false);
    const [monsterPrompt, setMoneterPrompt] = useState('')
    const [monsterDescription, setMonsterDescription] = useState('')
    const [monsterStats, setMonsterStats] = useState('')

    const handleMPInputChange = (event) => {
        setMoneterPrompt(event.target.value);
    };

    const handleMPClick = async () => {
        setLoading(true);
        await makeAPICalls(monsterPrompt);
        setLoading(false);
    };

    async function fetchAPI(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        return null;
    }

    async function makeAPICalls(prompt) {
        const urlDescription = `http://127.0.0.1:5000/description/${prompt}`;
        const urlStat = `http://127.0.0.1:5000/stats/${prompt}`;

        try {
            const [description, stats] = await Promise.all([fetchAPI(urlDescription), fetchAPI(urlStat)]);
            console.log('Data 1:', description);
            console.log('Data 2:', stats);
            setMonsterDescription(description);
            setMonsterStats(stats);

        } catch (error) {
            console.error('Error in one or both API calls:', error);
        }
    }

    return (
        <div className="App">
            <h1>Monster Generator</h1>

            <VStack spacing={4}>
                <Input value={monsterPrompt}
                    onChange={handleMPInputChange}
                    placeholder="Enter Short description prompt"/>
                <Button onClick={handleMPClick}
                    colorScheme="blue">
                    Generate Monster
                </Button>
                {
                loading ? (
                    <Spinner size="xl"/>
                ) : (
                    <>
                        <Box borderWidth="1px" borderRadius="lg" p="4" width="100%">
                            <Text>{monsterPrompt}&nbsp;Description:</Text>
                            <Text>{monsterDescription}</Text>
                        </Box>
                        <Box borderWidth="1px" borderRadius="lg" p="4" width="100%">
                            <Text>{monsterPrompt}&nbsp;Stats:</Text>
                            <Code>{monsterStats}</Code>
                        </Box>
                    </>
                )
            } </VStack>
        </div>
    )
}

export default App
