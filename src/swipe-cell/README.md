# SwipeCell

### Install

``` javascript
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

## Usage

### Basic Usage

```html
<van-swipe-cell>
  <van-button
    square
    slot="left"
    type="danger"
    text="Select"
  />
  <van-cell
    :border="false"
    title="Cell"
    value="Cell Content"
  />
  <van-button
    square
    slot="right"
    type="danger"
    text="Delete"
  />
</van-swipe-cell>
```

### Async close

```html
<van-swipe-cell :on-close="onClose">
  <van-button
    square
    slot="left"
    type="danger"
    text="Select"
  />
  <van-cell
    :border="false"
    title="Cell"
    value="Cell Content"
  />
  <van-button
    square
    slot="right"
    type="danger"
    text="Delete"
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
            message: 'Are you sure to delete?'
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

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Identifier of SwipeCell | `String | Number` | - |
| on-close | Callback function before close | `Function` | - |
| disabled | Whether to disabled swipe | `Boolean` | `false` |
| left-width | Width of the left swipe area | `Number` | `auto` |
| right-width | Width of the right swipe area | `Number` | `auto` |

### Slots

| Name | Description |
|------|------|
| default | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | Click positon (`left` `right` `cell` `outside`) |

### onClose Params

| Attribute | Description | Type |
|------|------|------|
| clickPosition | Click positon (`left` `right` `cell` `outside`) | `String` |
| instance | SwipeCell instance | `Object` |
| detail | Detail info | `Object` |

### Methods

Use ref to get SwipeCell instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| open | position: `left | right` | - | open SwipeCell |
| close | - | - | close SwipeCell |
