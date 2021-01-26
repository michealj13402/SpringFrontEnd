import { Layout, Typography } from 'antd';
import './App.css';
import FoodList from './components/FoodList';
import MyCart from './components/MyCart';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
      <Layout>
        <Header>
          <div className="header">
            <Title level={2} style={{color: 'white', lineHeight: 'inherit', marginBottom: 0}}>Lai Food</Title>
            <div>
              <MyCart />
            </div>
          </div>
        </Header>
        <Content style={{ padding: '50px' }}>
          <FoodList />
        </Content>
      </Layout>
    </>
  )
}

export default App;
