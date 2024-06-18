import { Container, Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = ({ unsplashUrls }) => {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    setThumbnails(unsplashUrls);
  }, [unsplashUrls]);

  return (
    <Container maxW="container.xl" p={4}>
      <Box display="flex" justifyContent="center" mb={8}>
        <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="150px" />
      </Box>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4}>
        {thumbnails.map((thumbnail, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={thumbnail.urls.small} alt={thumbnail.alt_description} />
            <Box p={4}>
              <Text fontWeight="bold" noOfLines={1}>
                {thumbnail.description || "Untitled"}
              </Text>
              <Text fontSize="sm" color="gray.500" noOfLines={2}>
                {thumbnail.user.name}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;