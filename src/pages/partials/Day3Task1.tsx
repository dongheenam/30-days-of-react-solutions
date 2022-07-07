import { VscGithub, VscColorMode } from "react-icons/vsc";

import Button from "../../components/Button";
import Group from "../../components/Group";
import { H2 } from "../../components/Headings";
import Input from "../../components/Input";
import Solution from "../../components/Solution";

export default function Day3Task1() {
  return (
    <>
      <H2>Subscribe form</H2>
      <Solution className="mont">
        <div className="text-4xl font-thin">SUBSCRIBE</div>
        <div>Sign up with your email address to receive news and updates.</div>
        <div className="w-full mt-8 flex flex-col lg:flex-row gap-4">
          <Input id="first" placeholder="First name" />
          <Input id="last" placeholder="Last name" />
          <Input id="email" placeholder="Email" />
        </div>
        <Button className="button-primary px-8 lg:px-32">Subscribe</Button>
      </Solution>
      <div></div>
    </>
  );
}
