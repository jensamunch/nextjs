import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

export default ({
  image,
  title,
  description
}) => (
    <Box width={256}>
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }}>
        <Image src={image} />
        <Box px={2}>
          <Heading
            fontSize={8}
            color='primary'>
            Hello
          </Heading>
          <Text fontSize={0}>
            {description}
            You can edit this code
          </Text>
        </Box>
      </Card>
    </Box>
  )
