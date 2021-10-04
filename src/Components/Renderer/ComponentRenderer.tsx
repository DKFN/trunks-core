import React from "react"
import {useSelector} from "react-redux";

export const CompontentRenderer = () => {
    //const components = useSelector((state) => state);

    // TODO: Create switch

    return <div className={"content"}>
        <div className="card">
        <div className="card-image">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-left">

                </div>
                <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                </div>
            </div>

            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
    </div>;

}
