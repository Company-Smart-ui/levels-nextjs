import {useEffect, useState} from "react";
import style from "./listLink.module.scss";
import Link from "next/link";



const createUrl = (item) => { return item.replace(/ /g,"_") }

const ListLink = ({categories}) => {
    const [active, setActive] = useState(null)
    useEffect(() => {

        const search = window.location?.search;
        if (search){
            setActive(search.replace("?category=", ""))
        } else{
            setActive("All")
        }
    }, [] )

    return (
        <div className={style.listLink}>
            <div className="container">
                <div className="wrap-list">
                    <ul className="list">
                        <li>
                            <Link href={"/?category=All"}>
                                <a onClick={() => setActive("All")}
                                   className={`list-item ${active === "All" ? 'active' : ''} `}>All</a>
                            </Link>
                        </li>
                        {categories.map(({name}, index) => {
                            return (

                                        <li  key={index}>
                                            <Link
                                                href={"./?category=" + createUrl(name)||""}

                                            >
                                                <a          onClick={() => setActive(createUrl(name))}
                                                            className={`list-item ${active === createUrl(name) ? 'active' : ''} `}
                                                >
                                            {name}
                                                </a>
                                            </Link>
                                        </li>

                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListLink;
