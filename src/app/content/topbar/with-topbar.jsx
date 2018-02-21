import React, {Fragment} from "react"
import TopBar from "./topbar.component"

export const withTopbar = (WrappedComponent, path) => {
    return class extends React.Component {
        render() {
            return (
                <Fragment>
                    <TopBar pathName={path}/>
                    <div style={{paddingTop: '64px'}}>
                        <WrappedComponent {...this.props}/>
                    </div>
                </Fragment>
            )
        }
    }
};