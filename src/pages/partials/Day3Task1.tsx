import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import Box from "../../components/Box";

export default function Day3Task1() {
  return (
    <>
      <h2>Subscribe form</h2>
      <Box className="mont items-center">
        <div className="text-4xl font-thin">SUBSCRIBE</div>
        <div>Sign up with your email address to receive news and updates.</div>
        <div className="w-full flex flex-col lg:flex-row gap-4 mt-8">
          <TextInput id="first" placeholder="First name" className="w-full" />
          <TextInput id="last" placeholder="Last name" className="w-full" />
          <TextInput id="email" placeholder="Email" className="w-full" />
        </div>
        <Button variant="solid" color="primary" className="px-8 lg:px-32">
          Subscribe
        </Button>
      </Box>
      <div></div>
    </>
  );
}
