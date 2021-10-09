import {IComponentBaseProps, IComponentStylingBaseProps} from "../compontentProps";

export interface IComponentInputProps extends IComponentBaseProps {
    text?: string;
    disabled?: boolean;
}

export interface IComponentInputStyleProps extends IComponentStylingBaseProps {
    isOutlined?: boolean;
    isRounded?: boolean;
    isLoading?: boolean;

    // TODO: Refactor like color
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isFullWidth?: boolean;

    color?: string;
}
