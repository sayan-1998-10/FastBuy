import { useRef } from "react";

const MenuIcon = () => {
    const bar1Ref = useRef();
    const bar2Ref = useRef();
    const bar3Ref = useRef();

    const openSideMenu = () => {
        bar1Ref.current.classList.toggle('cross')
        bar2Ref.current.classList.toggle('cross')
        bar3Ref.current.classList.toggle('cross')
    }

    return (
        <div onClick={openSideMenu} className="menu-container">
            <span ref={bar1Ref} className="bar"></span>
            <span ref={bar2Ref} className="bar"></span>
            <span ref={bar3Ref} className="bar"></span>
        </div>
    )
}

export default MenuIcon;