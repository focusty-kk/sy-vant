import { createNamespace } from '../utils';
import DatetimePicker from '../datetime-picker';
import Cell from '../cell';
import ActionSheet from '../actionSheet';
import { pickerProps } from '../picker/shared';
import { cellProps } from '../cell/shared';
import { cellProps } from '../../es/cell/shared';

const [createComponent, bem] = createNamespace('cell-datetime-picker');

/**
 * 由 cell-actionSheet-datepicker 组合而成的
 */
export default createComponent({
  props: {
    ...cellProps,
    ...pickerProps
  },
  data() {
    return {
      isShowPicker: false
    };
  },
  watch() {},
  computed: {},
  methods: {
    handlerShowPicker(){
      this.isShowPicker = true
    }
  },
  render() {
    const cellPropsPrefix = { readonly: true };
    return (
      <div class={bem()} ref="cell-datetime-picker">
        <Cell {...{ cellProps, cellPropsPrefix }} onClick={this.handlerShowPicker}/>
        <ActionSheet v-model="isShowPicker">
          <DatetimePicker {...{ pickerProps }} />
        </ActionSheet>
      </div>
    );
  }
});
