import {IComponentStylingBaseProps} from "../compontentProps";

export interface IComponentInputStyleProps extends IComponentStylingBaseProps {
    isOutlined?: boolean;
    isRounded?: boolean;
    isLoading?: boolean;

    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isFullWidth?: boolean;

    isWhite?: boolean;
    isLight?: boolean;
    isDark?: boolean;
    isBlack?: boolean;

    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
}