export interface IComponentBaseProps {
    id: string | number;
    component: string; // Component type
    name?: string;
    position?: IComponentBasePositioningProps;
}

export interface IComponentBasePositioningProps {
    positionType: string; // Can be of values "absolute (default)", "relative" and "responsive"
    posX?: string | number;
    posY?: string | number;
    height?: string | number;
    width?: string | number;
}

export interface IComponentStylingBaseProps {
    color?: string;
    size?: string;
    additionalClassNames?: string;
}
