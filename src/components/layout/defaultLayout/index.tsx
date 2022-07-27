import * as React from "react";
import { LayoutProps } from "./defaultLayout";
import Header from "@components/headers/defaultHeader";
import Footer from "@components/footers/defaultFooter";
import { Container, Row } from 'react-bootstrap';
import "./defaultLayout.scss";

const DefaultLayout : React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="body">
            <Header/>
            <main role="main">
                { props.children }
            </main>
            <Footer/>
        </div>
    );
}


export default DefaultLayout;