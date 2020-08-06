import { Box } from 'src/lib/primitives'

const PageContainer = ({ children, ...rest }) => {
  return (
    <>
      <Box
        css={`
          hieght: 100vh;
        `}
        {...rest}
      >
        {children}
      </Box>
    </>
  )
}

export default PageContainer
