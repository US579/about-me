import ImageIcon from "../icons/ImageIcon";
import { HeaderContainer, Icon, Links, LinkItem } from "./styles";


const Header = () => {
  return (
    <HeaderContainer>
      <Icon><ImageIcon /></Icon>
      <Links>
        <LinkItem href="/projects">Projects</LinkItem>
        <LinkItem href="/thoughts">Thoughts</LinkItem>
      </Links>
    </HeaderContainer>
  );
};

export default Header;
