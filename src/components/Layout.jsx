import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Layout.css'


export default function Layout (){

    return (
    <div className="mainContainer">
        <div className="content">
            <Header/>        
            <Outlet/>
        </div>
        <Footer/>
    </div>
    );
}