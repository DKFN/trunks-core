export interface IComponentBaseProps {
    id: string | number;
    component: string; // Component type
    name?: string;
    position?: IComponentBasePositioningProps;
    hidden?: boolean;
}

export interface IComponentBasePositioningProps {
    positionType: string; // Can be of values "absolute (default)", "relative" and "responsive"
    posX?: string | number;
    posY?: string | number;
    height?: string | number;
    width?: string | number;
    parent?: string; // Parent of the element to make it relative to it
}

export interface IComponentStylingBaseProps {
    color?: string;
    size?: string;
    additionalClassNames?: string;
}
