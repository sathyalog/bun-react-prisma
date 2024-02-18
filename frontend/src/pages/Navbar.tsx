import { Button, Tabs, Box, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Tabs.Root defaultValue="home">
        <Tabs.List>
          <Tabs.Trigger value="home">Home</Tabs.Trigger>
          <Tabs.Trigger value="chat">Chat</Tabs.Trigger>
          <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="home">
            <Text size="2">
              <Link to="/">Click on Home</Link>
            </Text>
          </Tabs.Content>

          <Tabs.Content value="chat">
            <Text size="2">
              <Link to="/chat">Chat</Link>
            </Text>
          </Tabs.Content>

          <Tabs.Content value="contact">
            <Text size="2">
              <Link to="/contact">Contact</Link>
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <br />
      <br />
      <Button>Bookmark</Button>
    </div>
  );
}

export default Navbar;
