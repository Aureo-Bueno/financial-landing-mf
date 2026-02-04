import {
  Header,
  HeaderInner,
  Brand,
  Title,
  Subtitle,
  Nav,
  NavLink,
} from "./styles";
import { Link } from "@tanstack/react-router";

export function HeaderNav() {
  return (
    <Header>
      <HeaderInner>
        <Brand>
          <Title>Planner Financeiro Mensal</Title>
          <Subtitle>Organize metas, receitas e despesas com clareza.</Subtitle>
        </Brand>
        <Nav>
          <NavLink as={Link} to="/">
            Home
          </NavLink>
          <NavLink as={Link} to="/intro">
            Introdução
          </NavLink>
          <NavLink as={Link} to="/planning">
            Planejamento
          </NavLink>
        </Nav>
      </HeaderInner>
    </Header>
  );
}
