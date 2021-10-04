import {IComponentBaseProps, IComponentStylingBaseProps} from "./compontentProps";
import {makePositionParams} from "./componentHelpers";
import classNames from "classnames";
import {useAppDispatch} from "../redux/store";


export interface IButtonProps extends IComponentBaseProps {
    text?: string;
    styling: IComponentStylingBaseProps & {
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
}

export const Button = (props: IButtonProps) => {
    const dispatch = useAppDispatch();

    /** STYLES */
    /* Non bulma styling */
    const generatedStyle = {
        ...makePositionParams(props.positioning)
    };

    /* Bulma related styling */
    const styling = props.styling;
    const classes = classNames({
        // Component styling
        'is-loading': styling.isLoading,
        'is-rounded': styling.isRounded,
        'is-outlined': styling.isOutlined,

        // Component width/height behavior
        'is-small': styling.isSmall,
        'is-medium': styling.isMedium,
        'is-large': styling.isLarge,
        'is-fullwidth': styling.isFullWidth,

        // Colors
        'is-white': styling.isWhite,
        'is-light': styling.isLight,
        'is-dark': styling.isDark,
        'is-black': styling.isBlack,
        'is-primary': styling.isPrimary,
        'is-success': styling.isSuccess,
        'is-warning': styling.isWarning,
        'is-danger': styling.isDanger
    });

    /** TEXT */

    const text = props.text || '';

    /** Event Routing */
    const onClick = (e: any) => console.log(e);
    const onHover = console.log;

    return <button
        className={classNames("button", classes)}
        style={generatedStyle}
        onClick={onClick}
    >{text}
    </button>;
}
