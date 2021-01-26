import { Button, Card, List } from "antd";

const data = [
  {
    title: 'Food1',
  },
  {
    title: 'Food2',
  },
  {
    title: 'Food3',
  },
  {
    title: 'Food4',
  },
  {
    title: 'Food5',
  },
  {
    title: 'Food6',
  },
];

const FoodList = () => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title} extra={<Button>Add to my cart</Button>}>Card content</Card>
        </List.Item>
      )}
    />
  )
}

export default FoodList;