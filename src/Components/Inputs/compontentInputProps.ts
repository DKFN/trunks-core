import {IComponentStylingBaseProps} from "../compontentProps";

export interface IComponentInputStyleProps extends IComponentStylingBaseProps {
    isOutlined?: boolean;
    isRounded?: boolean;
    isLoading?: boolean;

    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isFullWidth?: boolean;

    color?: string;
}