import { PopupMixinProps } from '../mixins/popup/type';

export type ActionSheetItem = {
    name: string;
    subname?: string;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    callback?: (item: ActionSheetItem) => void;
};

export type ActionSheetProps = PopupMixinProps & {
    title?: string;
    actions: ActionSheetItem[];
    duration: number;
    cancelText?: string;
    closeOnClickAction?: boolean;
    safeAreaInsetBottom?: boolean;
};
