import { Wrapper, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    {body}
  </Wrapper>
);

export default Section;