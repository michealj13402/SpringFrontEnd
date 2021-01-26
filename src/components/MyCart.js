import { Button, Drawer, List } from "antd";
import { useState } from "react";

const mockData = [
  {
    title: 'Food1 - $1.75',
  },
  {
    title: 'Food2 - $2.05',
  },
  {
    title: 'Food3 - $3.25',
  },
  {
    title: 'Food4 - $6.76',
  },
];

const MyCart = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const onCloseDrawer = () => {
    setCartVisible(false);
  }

  const onOpenDrawer = () => {
    setCartVisible(true);
  }

  return (
    <>
      <Button type="primary" shape="round" onClick={onOpenDrawer}>Cart</Button>
      <Drawer
        title="My Shopping Cart"
        onClose={onCloseDrawer}
        visible={cartVisible}
        width={520}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onCloseDrawer} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onCloseDrawer} type="primary">
              Checkout
            </Button>
          </div>
        }
      >
        <List
          itemLayout="horizontal"
          dataSource={mockData}
          renderItem={item => (
            <List.Item
              actions={[
                <Button shape="round" danger>Delete</Button>
              ]}
            >
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Really Good Food"
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  )
}

export default MyCart;