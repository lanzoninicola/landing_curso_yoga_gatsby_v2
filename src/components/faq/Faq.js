import * as React from "react"
import { Sticky, GridFixedContainer } from "@layouts"
import { Title, Text } from "@typography"

const Faq = () => {
  return (
    <Sticky
      style={{ overflow: "hidden" }}
      style={{
        backgroundColor: "white",
        height: "auto",
      }}
    >
      <GridFixedContainer
        columns="1fr"
        rAuto
        gap="32"
        pt={{ laptop: 160, tablet: 160, mobile: 80 }}
        pl={{ laptop: 60, tablet: 60, mobile: 16 }}
        pr={{ laptop: 60, tablet: 60, mobile: 16 }}
        pb={{ laptop: 160, tablet: 160, mobile: 80 }}
      >
        <Title
          as="h4"
          size={{ laptop: 24, tablet: 24, mobile: 24 }}
          style={{ color: "#A4347E" }}
        >
          é um convite para você
        </Title>
        <Text size={{ laptop: 24, tablet: 24, mobile: 24 }}>
          Fazer yoga é desacelerar o nosso tempo e realmente nos encontrarmos. É
          tomar consciência de que temos um corpo e uma mente que trabalham
          juntos. Acredite, você pode. Libere sua mente da idéia de uma prática
          extravagante. Pare, feche os olhos, respire profundamente.... É isso
          aí, você já está começando a fazer yoga.
        </Text>
        <Title
          as="h4"
          size={{ laptop: 24, tablet: 24, mobile: 24 }}
          style={{ color: "#A4347E" }}
        >
          também é para mim?
        </Title>
        <Text size={{ laptop: 24, tablet: 24, mobile: 24 }}>
          A prática que faremos é adequada para todos, não há posições difíceis
          de serem desempenhadas. Tenha confiança no potencial da ioga e, em
          suma, não custa nada tentar. A lição de abertura do curso é gratuita.
        </Text>

        <Title
          as="h4"
          size={{ laptop: 24, tablet: 24, mobile: 24 }}
          style={{ color: "#A4347E" }}
        >
          por que esta iniciativa é diferente de outros cursos de ioga online?
        </Title>
        <Text size={{ laptop: 24, tablet: 24, mobile: 24 }}>
          Muitos cursos on-line são uma coleção de vídeos gravados, não há
          contato com o professor durante a prática, por exemplo, ninguém pode
          adverti-lo se você estiver realizando movimentos incorretos. As
          sessões de yoga neste curso serão todas ao vivo, observarei seus
          movimentos e corrigirei você quando necessário. Se necessário, vou
          sugerir um exercício alternativo adequado à sua condição física. Além
          disso, se você precisar de uma referência mesmo após os horários
          programados das aulas, para apoio ou apenas para compartilhar um
          pensamento que seja útil ao caminho que você está tomando.
        </Text>
        <Title
          as="h4"
          size={{ laptop: 24, tablet: 24, mobile: 24 }}
          style={{ color: "#A4347E" }}
        >
          o curso on-line é eficaz?
        </Title>
        <Text size={{ laptop: 24, tablet: 24, mobile: 24 }}>
          Minha atenção, dedicação e cuidado dedicados ao desenvolvimento deste
          projeto será idêntico a um curso presencial. Para a descanso, caberá a
          você dedicar a disciplina necessária para para atingir seus objetivos.
          Leia o próximo ponto.
        </Text>

        <Title
          as="h4"
          size={{ laptop: 24, tablet: 24, mobile: 24 }}
          style={{ color: "#A4347E" }}
        >
          os resultados estão garantidos?
        </Title>
        <Text size={{ laptop: 24, tablet: 24, mobile: 24 }}>
          O professor pode tornar seu conhecimento disponível, mas as
          experiências experiências pertencem individualmente a cada estudante,
          à sua consciência consciência, sua disciplina e seu poder de praticar.
        </Text>
      </GridFixedContainer>
    </Sticky>
  )
}

export default Faq
