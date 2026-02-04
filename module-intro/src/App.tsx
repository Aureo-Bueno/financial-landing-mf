import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Pill = styled.span`
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 6px 12px;
  font-weight: 600;
  font-size: 0.85rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgAlt};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const CardIcon = styled.span`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

const ListItem = styled.li`
  margin-bottom: 6px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Title>Introdução ao planejamento financeiro mensal</Title>
          <Subtitle>
            Uma visão simples para organizar a vida financeira, definir metas e
            acompanhar decisões com mais clareza.
          </Subtitle>
        </Header>

        <PillRow>
          <Pill>Metas claras</Pill>
          <Pill>Equilíbrio renda x gastos</Pill>
          <Pill>Disciplina contínua</Pill>
        </PillRow>

        <Grid>
          <Card>
            <CardHeader>
              <CardIcon>🧭</CardIcon>
              <CardTitle>O que é planejamento financeiro</CardTitle>
            </CardHeader>
            <CardText>
              Planejar é definir metas, traçar estratégias e analisar o que
              funcionou para melhorar continuamente. Aplicado ao dinheiro, isso
              se torna uma ferramenta estratégica para administrar as finanças.
            </CardText>
          </Card>
          <Card>
            <CardHeader>
              <CardIcon>📊</CardIcon>
              <CardTitle>Por que ele ajuda</CardTitle>
            </CardHeader>
            <CardText>
              O planejamento pessoal busca equilibrar renda e gastos para
              alcançar objetivos de curto, médio e longo prazo e realizar sonhos
              com mais previsibilidade.
            </CardText>
          </Card>
          <Card>
            <CardHeader>
              <CardIcon>⏳</CardIcon>
              <CardTitle>Disciplina faz diferença</CardTitle>
            </CardHeader>
            <CardText>
              O sucesso do planejamento depende de constância. Não basta
              planejar por poucos dias: acompanhar e ajustar com regularidade é
              o que sustenta os resultados.
            </CardText>
          </Card>
        </Grid>

        <div>
          <CardTitle>Checklist rápido</CardTitle>
          <List>
            <ListItem>Mapear renda e gastos fixos/variáveis.</ListItem>
            <ListItem>Definir metas de curto, médio e longo prazos.</ListItem>
            <ListItem>Registrar gastos para identificar excessos.</ListItem>
            <ListItem>Revisar o orçamento e ajustar categorias.</ListItem>
            <ListItem>Construir reserva de emergência.</ListItem>
          </List>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
