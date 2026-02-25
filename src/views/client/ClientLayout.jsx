import { Outlet, useLocation } from "react-router-dom";
import logo from '../../assets/OriginalLogo.png'
import ImageHome from '../../assets/PhotoHeader.png'
import NavbarClient from "./components/NavbarClient";
import { useState } from "react";

const ClientLayout = () => {

    // Verificar Ruta
    const location = useLocation()
    const homepath = location.pathname === '/'

    const [colorBackground, setColorBackground] = useState('')

    return (
        <div className="w-full h-screen">

            {/* HEADER */}
            <header
                className={`
                    w-full pt-24 bg-cover bg-center
                `}

                style={{
                    backgroundImage: homepath ? `url(${ImageHome})` : ``,
                    backgroundColor: !homepath ? colorBackground : ''
                }}
            >
                <NavbarClient
                    title={'CPTLN - PERU'}
                    logo={logo}
                >
                </NavbarClient>

                
                <div className="h-80">

                </div>
            </header>


            {/* MAIN */}
            <main>
                <Outlet context={[colorBackground, setColorBackground]}/>
            </main>

            {/* FOOTER */}
            <footer>

            </footer>
        </div>
    )
}

export default ClientLayout