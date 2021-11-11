import stats from "../../fixtures/stats"
import { Container, Info, Media, Stat, Stats } from "./layout"
import { Accent, Description, Qty, Text, Title } from "./typography"


const StatsCard = () => (
  <Container>
    <Media />
    <Info>
      <Title>
        Get <Accent>insights</Accent> that help your business grow.
      </Title>

      <Description>
        Discover the benefits of data analytics and make better decisions regarding revenue, customer
        experience, and overall efficiency.
      </Description>

      <Stats>
        {
          stats.map(stat => (
            <Stat>
              <Qty>
                {stat.qty}
              </Qty>
              <Text>
                {stat.txt}
              </Text>
            </Stat>
          ))
        }
      </Stats>
    </Info>
  </Container>
)

export default StatsCard
