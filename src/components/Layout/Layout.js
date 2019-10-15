import React, {Component, Fragment} from 'react';
import Footer from './Navigation/Footer/Footer';
import './Layout.css';
import Toolbar from './Navigation/Toolbar/Toolbar'
import SideDrawer from './Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };



    render () {

        let layoutStyle = {
            display: 'grid',
            gridTemplateRows: '150px 1fr minmax(200px, auto)',
            minHeight:'100vh'
        };

        let toolbarStyle = {
            gridRow: 1,

        };

        let contentStyle = {
            gridRow: 2,

        };

        let FooterStyle = {
            gridRow: 3
        };

        return (


                <div className={"Container"} style={layoutStyle}>
                    <div style={toolbarStyle}>
                        <Toolbar
                            open={this.state.showSideDrawer}
                            drawerToggleClicked={this.sideDrawerToggleHandler} />
                    </div>
                    <SideDrawer
                        isAuthenticated={this.props.isAuthenticated}
                        open={this.state.showSideDrawer}
                        drawerToggleClicked={this.sideDrawerToggleHandler}
                        closed={this.sideDrawerClosedHandler} />
                    <div className={"Content"} style={contentStyle}>{this.props.children}</div>
                    <div style={FooterStyle}>
                        <Footer/>
                    </div>
                </div>
        );
    }
}



export default Layout;
