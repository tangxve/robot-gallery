# 机器人购物网站

场景：
1、普通商品卡片 

2、打折商品卡片 

3、拥有复用的页面逻辑：加入购物车 `addToCart`


分别从高阶函数和自定义hook方向改造

## 复用逻辑

```tsx
    const addToCart: AddToCartFn = (id, name) => {
      if (setState) {
        setState((state: any) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }]
            }
          }
        })
      }
    }
```

## 高阶函数

命名规范：withXxxx

[withAddToCart](./src/components/AddToCart.tsx#L6)

[普通商品 Robots 组件：](./src/components/Robots.tsx)


## 自定义 hooks

命名规范：useXxxx

[useAddToCart](./src/components/AddToCart.tsx)

[打折商品 RobotDiscount 组件：](./src/components/RobotDiscount.tsx#L30)
