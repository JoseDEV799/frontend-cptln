import { useEffect, useState } from "react"
import { PanelLeft, ChevronDown } from 'lucide-react'
import { useNavigate } from "react-router-dom"

const NavbarClient = ({ title, logo, children }) => {

    // Control de estilo para Navbar
    const [show, setShow] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Control de panel derecho
    const [openPanel, setOpenPanel] = useState(false)
    const showPanel = () => setOpenPanel(!openPanel)

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY

            setScrolled(current > 80)

            if (current > lastScrollY) {
                setShow(false) // bajando
            } else {
                setShow(true) // subiendo
            }

            setLastScrollY(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full 
                transition-all duration-300 ease-in-out
                ${show ? "translate-y-0" : "-translate-y-full"}
                ${scrolled ? "bg-white backdrop-blur shadow-md" : "bg-transparent"}
            `}
        >
            <div className="flex lg:justify-between justify-center items-center relative lg:px-20">

                {/* Boton responsivo para panel derecho del Navbar */}
                <button
                    onClick={showPanel}
                    className={`
                        absolute lg:hidden transition-all duration-200 ease-in-out cursor-pointer
                        ${openPanel ? 'z-20 max-md:right-8 max-lg:right-105' : 'z-10 right-8'}
                    `}
                >
                    <PanelLeft
                        className={`
                            transition-all duration-200 ease-in-out text-white
                            ${openPanel ? 'rotate-180 max-md:text-black' : 'rotate-0 max-md:text-white'}
                        `}
                    />
                </button>

                {/* Titulo y logo del navbar */}
                <div className={`flex py-8 items-center gap-2 max-md:px-5 max-lg:px-20 max-lg:w-full max-xl:w-90 ${openPanel ? 'max-md:bg-gray-200 z-10' : 'max-md:bg-transparent z-0'}`}>

                    {/* Logo del Navbar */}
                    <img
                        src={logo}
                        alt="Logo"
                        className={`
                            h-12 w-12 
                            ${openPanel ? 'max-md:z-10' : 'z-0'}
                        `}
                    />

                    {/* Titulo del Navbar */}
                    <span
                        className={`
                            transition-all duration-200 ease-in-out
                            font-bold text-xl
                            ${scrolled ? 'text-black' : 'text-white'} 
                            ${openPanel ? 'max-lg:z-10 max-md:text-black' : 'max-lg:z-0 max-lg:text-white'} 
                        `}
                    >
                        {title}
                    </span>
                </div>

                {/* Lista de rutas personalizable */}
                <ul
                    className={`
                        transition-all duration-300 ease-in-out
                        max-md:inset-0 max-md:w-full
                        max-lg:overflow-y-auto
                        max-lg:fixed 
                        max-lg:h-screen 
                        max-lg:bg-gray-200 
                        max-lg:text-black
                        max-lg:w-1/2 max-lg:pt-5
                        max-lg:top-0 max-lg:right-0
                        lg:ml-auto lg:flex lg:items-center lg:gap-6
                        ${openPanel ? 'translate-x-0' : 'max-lg:translate-x-full'}
                        ${scrolled ? 'text-black' : 'text-white'}
                    `}
                >
                    {children}
                </ul>
            </div>
        </nav>
    )
}

export default NavbarClient


// Componente Links del Navbar
export const NavbarOption = ({ title, path, isListOptions = false, isOptionChild = false, children }) => {

    // Navegacion
    const navigate = useNavigate()

    // Control del Dropdown
    const [openListOptions, setOpenListOptions] = useState(false)

    // Navegacion y Control de Dropdown
    const handleClick = () => {
        if (isListOptions) {
            setOpenListOptions(!openListOptions)
        } else {
            navigate(path)
        }
    }

    return (
        <li
            className={`
                relative group cursor-pointer transition-all duration-100 ease-in-out 
                ${isOptionChild ? 'lg:py-1 lg:px-5 lg:hover:bg-gray-200 lg:rounded-md' : ''}
            `}
        >
            {/* Titulo de la vista */}
            <span
                onClick={handleClick}
                className={`
                    flex items-center
                    max-lg:justify-between max-lg:w-full max-lg:text-lg max-lg:py-5 max-md:px-5 max-lg:px-10
                    lg:py-2.5 lg:text-nowrap
                `}
            >
                {title}

                <ChevronDown
                    className={`
                        transition-transform duration-200 ease-in-out lg:size-4 lg:mt-1
                        ${isListOptions ? 'block' : 'hidden'}
                        ${openListOptions ? 'max-lg:rotate-180' : 'max-lg:rotate-0'}
                    `}
                />

            </span>

            {/* Rutas despegables y Dropdown */}
            {isListOptions && (
                <ul
                    className={`
                        transition-all duration-300 ease-in-out
                        bg-white  text-black
                        max-lg:relative
                        max-lg:pl-10
                        lg:rounded-md 
                        lg:absolute lg:right-0 lg:top-full
                        lg:min-w-45 max-lg:w-full
                        lg:opacity-0 lg:invisible lg:pointer-events-none
                        lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:pointer-events-auto
                        lg:delay:150 lg:group-hover:delay-[0ms]
                        ${openListOptions ? 'block max-lg:shadow-[inset_2px_0_0_0_rgb(107,114,128)]' : 'max-lg:hidden'}
                    `}
                >
                    {children}
                </ul>
            )}
        </li>
    )
}