import React from "react"
import {useSelector} from "react-redux";
import {Button} from "../Inputs/Button";
import {Box} from "../Layout/Box";
import {Text} from "../Layout/Text"
import {Input} from "../Inputs/Input";
import {IAppState} from "../../redux/store";
import {ComponentRouter} from "./ComponentRouter";

export const ComponentRenderer = () => {
    const rendererState = useSelector((state) => (state as IAppState).renderer);

    // TODO: Create switch

    const builtComponents = Object.values(rendererState.components).map((componentProps: any) => {
        return <ComponentRouter {...componentProps}/>
    });
    console.log("Renderer state: ", rendererState);
    return <>
        {builtComponents}
        </>

    /*return <>
        <Box id={"testBox"} position={{
            positionType: 'absolute',
            posX: 40,
            posY: 40,
            width: 400,
            height: 400
        }}/>
        <Button id={"test"} text={"testComponent"}
            styling={{
                isSuccess: true
            }}
            position={{
                positionType: 'absolute',
                posX: 280,
                posY: 350
            }}
            />
        <Text
            id={"testText"}
            text={"What is your name ?"}
            position={{
                positionType: 'absolute',
                posX: 60,
                posY: 60
            }}
            styling={{
                isSubtitle: true,
                size: 5
            }}
        />
        <Input
            id={"testInput"}
            text={"John"}
            position={{
                positionType: 'absolute',
                posX: 60,
                posY: 90
            }}
            styling={{}}
        />

        <Text
            id={"testText"}
            text={"What is your last name ?"}
            position={{
                positionType: 'absolute',
                posX: 60,
                posY: 160
            }}
            styling={{
                isSubtitle: true,
                size: 5
            }}
        />

        <Input
            id={"testInput"}
            text={"Doe"}
            position={{
                positionType: 'absolute',
                posX: 60,
                posY: 190
            }}
            styling={{
                isRounded: true,
                isSuccess: true
            }}
        />

        <Text
            id={"testText"}
            text={"MySuperRPCorp version 1.0.0"}
            position={{
                positionType: 'absolute',
                posX: 130,
                posY: 410
            }}
            styling={{
            }}
        />
        </>; */

}
