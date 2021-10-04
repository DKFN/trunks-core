import {IComponentInputStyleProps} from "./compontentInputProps";
import classNames from "classnames";

export const makeInputClassNames = (styling: IComponentInputStyleProps = {}) => {
    return classNames({
        // Component styling
        'is-loading': styling?.isLoading,
        'is-rounded': styling?.isRounded,
        'is-outlined': styling?.isOutlined,

        // Component width/height behavior
        'is-small': styling?.isSmall,
        'is-medium': styling?.isMedium,
        'is-large': styling?.isLarge,
        'is-fullwidth': styling?.isFullWidth,

        // Colors TODO: Refactor too much booleans lmao
        'is-white': styling?.isWhite,
        'is-light': styling?.isLight,
        'is-dark': styling?.isDark,
        'is-black': styling?.isBlack,
        'is-primary': styling?.isPrimary,
        'is-success': styling?.isSuccess,
        'is-warning': styling?.isWarning,
        'is-danger': styling?.isDanger
    });
}

