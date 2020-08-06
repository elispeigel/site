import PageLayout from 'src/layouts/PageLayout'

import { Text, Flex, Box, Button } from 'src/lib/primitives'

const HomePage = () => {
  return (
    <PageLayout>
      <Box
        css={`
          height: 100vh;
        `}
        bg="white"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          css={`
            height: 100vh;
          `}
        >
          <Box
            css={`
              border-radius: 50px;
              box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
              height: 70vh;
              width: 70vw;
            `}
            bg="white"
          >
            <Box>
              <Text
                css={`
                  font-size: min(10vw, 80px);
                  text-shadow: 8px 4px 8px #fca311;
                `}
                color="black"
                fontFamily="semibold"
                p="20px"
              >
                Eli Speigel
              </Text>
              
            </Box>
          </Box>
        </Flex>
      </Box>
    </PageLayout>
  )
}

export default HomePage
