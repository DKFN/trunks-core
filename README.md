# Trunks-core

Trunks-core is the view part of trunks, its goal is only to add/modify or destroy components according to the JSON Component Declaration it receives.
It also exposes a global object wich is used to receive components specifications and also send the events to the client application.

This package is not enough on its own, the resulting build of trunks core aims to be packaged on the clients that will use the rendering API.

# Roadmap
## Components
- [X] Input
- [X] Text
- [X] Button
- [X] Box
- [ ] CheckBoxes
- [ ] Radio
- [ ] ProgressBar
- [ ] Notification
- [ ] ColorPicker
- [ ] Image
- [ ] Tabs

## Positionning
- [X] Absolute position
- [ ] Bulma Responsive

## Events
- [X] onClick
- [X] onChange
- [ ] onEnter

## TrunksIO
- [X] AddComponent
- [X] EditComponent
- [X] DestroyComponent
- [X] sendEvent

# Interacting with Trunks
Here is a simple schematics of how Trunks work until the final rendering

Some code: represents user code written in Lua
TrunksLua: represents a client that will interface the user code and translate it in the JSON component syntax for Trunks to render
Trunks: Trunks core, this repository

[Insert schematic here]

## Getting TrunksIO and interacting
To communicate with Trunks you need to first find it, we export a `TRUNKS` or `window.TRUNKS` global for interacting with Trunks.

You can either call it from JS or from your language of choice if you can send JS commands to the WebUI currently running Trunks.

### Adding a componenent
To add a component you must use function `TRUNKS.addComponent`, it takes only one parameter with the Component JSON.
For example:
```javascript
const firstButton = 
    {
        id: "Cypress1",
        component: "Button",
        text: "Hello world !",
        position: {
            positionType: "absolute",
            posX: 0,
            posY: 0
        }
    };

    TRUNKS.addComponent(JSON.stringify(firstButton))
```

Note that the Id is already specified, the id must always be specified before adding the component it is your responsability to set the component id.

Will render a simple button on the top left of the screen:
[Insert button image here]

### Catching component events
In order to catch all component events you need to subscribe a function hook, this hook is the function that will always be called
when a even happends on an element (onClick, onEnter, etc etc).
```javascript
TRUNKS.setEventHook((event) => {
    console.log(event);
});
```

After clicking the button created in the previous chapter it will call the hook with:
```json
{
  "eventType": "onClick",
  "eventPayload": {
    "id": "Cypress1"
  }
}
```

It will always return an id and may return the name if user has specified it alongisde the value if the component has one for this event.

The next step for you is to accuratly redirect the event to the corresponding component and update its representation.

# Component declaration syntax

# Events handling
