import PageLayout from 'src/layouts/PageLayout'

import { Text, Flex, Box, Button, Image } from 'src/lib/primitives'

const HomePage = () => {
  return (
    <PageLayout>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg="white"
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
          <Flex
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            css={`
              height: 100%;
            `}
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
            <Box
              css={`
                width: 60%;
                height: 80%;
              `}
            >
              <Flex justifyContent="space-between">
                <Image
                  css={`
                    :hover {
                      transform: scale(1.0075);
                    }
                  `}
                  src="public/images/github.png"
                />
                <Image
                  css={`
                    :hover {
                      transform: scale(1.0075);
                    }
                  `}
                  src="public/images/resume.png"
                />
                <Image
                  css={`
                    :hover {
                      transform: scale(1.0075);
                    }
                  `}
                  src="public/images/email.png"
                />
              </Flex>
            </Box>
            <Box
              bg="blue"
              css={`
                border-radius: 50px;
                padding: 4vh;
                width: 90%;
              `}
            >
              <Text
                css={`
                  color: white;
                `}
                fontFamily="regular"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus a explicabo enim nemo saepe ratione fugiat, sunt
                quibusdam in, praesentium dolor atque assumenda labore fuga at
                numquam vero voluptatum ab?
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </PageLayout>
  )
}

export default HomePage
