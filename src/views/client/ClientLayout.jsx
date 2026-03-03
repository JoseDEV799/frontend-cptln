import { Outlet, useLocation } from "react-router-dom";
import logo from '../../assets/OriginalLogo.png'
import logoFooter from '../../assets/WhiteBlackLogo.png'
import ImageHome from '../../assets/PhotoHeader.png'
import NavbarClient, { NavbarOption } from "./components/NavbarClient";
import { useState } from "react";

const ClientLayout = () => {

    // Verificar Ruta
    const location = useLocation()
    const homepath = location.pathname === '/'

    // Informacion del Header (Background color, titulo, subtitulo)
    const [colorBackground, setColorBackground] = useState('')
    const [titleHeader, setTitleHeader] = useState('')
    const [subtitleHeader, setSubtitleHeader] = useState('')

    return (
        <div className="min-h-screen flex flex-col">

            {/* HEADER */}
            <header
                className={`
                    flex flex-col
    items-center
    justify-center
                    transition-colors duration-300 ease-in-out
                    w-full pt-24 bg-cover bg-center
                    2xl:h-100 xl:h-120 lg:h-80 md:h-80 max-md:h-60
                    text-center
                `}

                style={{
                    backgroundImage: homepath
                        ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ImageHome})`
                        : ``,
                    backgroundColor: !homepath
                        ? colorBackground
                        : '',
                }}
            >


                {/* ======= NAVBAR =========== */}
                <NavbarClient
                    title={'CPTLN - PERU'}
                    logo={logo}
                >

                    <NavbarOption
                        title={'Inicio'}
                        path={'/'}
                    />

                    <NavbarOption
                        title={'Conocenos'}
                        path={'/conocenos'}
                    />

                    <NavbarOption
                        title={'Programas'}
                        isListOptions
                    >
                        <NavbarOption
                            isOptionChild
                            title={'Familia'}
                            path={'/'}
                        />
                        <NavbarOption
                            isOptionChild
                            title={'Niños y Adolecentes'}
                            path={'/'}
                        />
                        <NavbarOption
                            isOptionChild
                            title={'Creciendo en familia'}
                            path={'/'}
                        />

                    </NavbarOption>

                    <NavbarOption
                        title={'Recursos'}
                        path={'/'}
                    />

                    <NavbarOption
                        title={'Noticias'}
                        path={'/'}
                    />

                    <NavbarOption
                        title={'Contactanos'}
                        path={'/'}
                    />

                    <NavbarOption
                        title={'Apoyanos'}
                        path={'/'}
                    />

                    <NavbarOption
                        title={'Oracion'}
                        path={'/'}
                    />

                </NavbarClient>

                {/* TITLE  SUBTITLE HEADER */}
                <section className="space-y-5">

                    {/* TITLE */}
                    <h1 className="text-white text-5xl font-semibold">
                        {titleHeader}
                    </h1>

                    {/* SUBTITLE */}
                    <p className="text-white text-3xl font-semibold">
                        {subtitleHeader}
                    </p>

                </section>

            </header>


            {/* MAIN */}
            <main className="flex-1 flex-col lg:px-20 p-5">
                <Outlet context={{ setColorBackground, setTitleHeader, setSubtitleHeader }} />
            </main>

            {/* FOOTER */}
            <footer className="flex flex-col w-full bg-black items-center justify-center py-5">
                <img src={logoFooter} alt="" className="size-15" />
                <span className="text-white">
                    Cristo para Todas las Naciones - Perú
                </span>
            </footer>
        </div>
    )
}

export default ClientLayout