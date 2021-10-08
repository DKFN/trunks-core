import {IComponentStylingBaseProps} from "../compontentProps";

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