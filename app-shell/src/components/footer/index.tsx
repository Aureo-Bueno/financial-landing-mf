import { FooterHighlight, FooterInner, FooterText, FooterWrapper } from "./styles";

function Footer() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR");
  const year = today.getFullYear();

  return (
    <FooterWrapper>
      <FooterInner>
        <FooterText>Atualizado em {formattedDate}</FooterText>
        <FooterText>
          © {year} <FooterHighlight>Aureo Alexandre</FooterHighlight> ·
          Desenvolvido por mim
        </FooterText>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
