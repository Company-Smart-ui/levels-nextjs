import logo from "../../images/logo-levels.svg";
import {useState} from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";


function Header() {
    const [activeState, setActiveState] = useState(false)
    return (
        <header className={style.header}>
            <div className={`wrap-header  ${activeState ? 'open' : ''}`}>
                <div className={"container"}>
                    <Link href="/">
                        <a>
                            <figure className="logo">
                                <Image src={logo} alt="logo"/>
                            </figure>
                        </a>
                    </Link>

                    <div className="search"></div>
                    <ul className={"menu"}>
                        <li><Link href={"./"}><a>Levels Blog</a></Link></li>
                        <li><Link href={"./"}><a>request access</a></Link></li>
                    </ul>
                    <button className="btn-menu" onClick={() => setActiveState(prev => !prev)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;
