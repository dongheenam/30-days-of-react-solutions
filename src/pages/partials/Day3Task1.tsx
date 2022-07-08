import Button from "../../components/Button";
import Input from "../../components/Input";
import Box from "../../components/Box";

export default function Day3Task1() {
  return (
    <>
      <h2>Subscribe form</h2>
      <Box className="mont items-center">
        <div className="text-4xl font-thin">SUBSCRIBE</div>
        <div>Sign up with your email address to receive news and updates.</div>
        <div className="w-full flex flex-col lg:flex-row gap-4 mt-8">
          <Input type="text" id="first" placeholder="First name" />
          <Input type="text" id="last" placeholder="Last name" />
          <Input type="text" id="email" placeholder="Email" />
        </div>
        <Button variant="solid" color="primary" className="px-8 lg:px-32">
          Subscribe
        </Button>
      </Box>
      <div></div>
    </>
  );
}
