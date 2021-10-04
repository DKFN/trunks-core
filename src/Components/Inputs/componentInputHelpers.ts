import {IComponentInputStyleProps} from "./compontentInputProps";
import classNames from "classnames";

export const makeInputClassNames = (styling: IComponentInputStyleProps = {}) => {
    const maybeColor = "is-" + styling?.color ;
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

        [maybeColor]: styling?.color
    });
}

