import { createNamespace } from '../utils';
import { CheckboxMixin } from '../mixins/checkbox';

const [createComponent, bem] = createNamespace('radio');

export default createComponent({
  mixins: [
    CheckboxMixin({
      bem,
      role: 'radio',
      parent: 'vanRadio'
    })
  ],

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    checked() {
      return this.currentValue === this.name;
    }
  },

  methods: {
    onClickIcon() {
      if (!this.isDisabled) {
        this.currentValue = this.currentValue === this.name ? '' : this.name;
      }
    },

    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.currentValue === this.name ? '' : this.name;
      }
    }
  }
});
