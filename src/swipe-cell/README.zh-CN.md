# SwipeCell 滑动单元格

### 引入

``` javascript
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

## 代码演示

### 基础用法

`SwipeCell`组件提供了`left`和`right`两个插槽，用于定义两侧滑动区域的内容

```html
<van-swipe-cell>
  <van-button
    square
    slot="left"
    type="danger"
    text="选择"
  />
  <van-cell
    :border="false"
    title="单元格"
    value="内容"
  />
  <van-button
    square
    slot="right"
    type="danger"
    text="删除"
  />
</van-swipe-cell>
```

### 异步关闭

```html
<van-swipe-cell :on-close="onClose">
  <van-button
    square
    slot="left"
    type="danger"
    text="选择"
  />
  <van-cell
    :border="false"
    title="单元格"
    value="内容"
  />
  <van-button
    square
    slot="right"
    type="danger"
    text="删除"
  />
</van-swipe-cell>
```

```js
export default {
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符，可以在 onClose 的参数中获取到 | `String | Number` | - | 2.0.4 |
| on-close | 关闭时的回调函数 | `Function` | - | - |
| disabled | 是否禁用滑动 | `Boolean` | `false` | - |
| left-width | 指定左侧滑动区域宽度 | `Number` | `auto` | - |
| right-width | 指定右侧滑动区域宽度 | `Number` | `auto` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell` `outside`) |

### onClose 参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| clickPosition | 关闭时的点击位置 (`left` `right` `cell` `outside`) | `String` |
| instance | SwipeCell 实例 | `Object` |
| detail | 额外信息，包含 name 字段 | `Object` |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| open | position: `left | right` | - | 打开单元格侧边栏 |
| close | - | - | 收起单元格侧边栏 |
