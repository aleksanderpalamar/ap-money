import { Summary } from '../Summary';
import { Table } from '../Table';
import { DashboardContainer } from './styles';

export function Dashboard() {  

  return (
    <DashboardContainer>
      <Summary />
      <Table />
    </DashboardContainer>
  )
}