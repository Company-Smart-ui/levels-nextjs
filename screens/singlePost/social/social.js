import style from "./social.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import linkedin from '../icons/linkedin.svg';
import link from '../icons/link.svg';
import email from '../icons/email.svg';

const social = [facebook, twitter, linkedin, link, email];

const SocialSinglePost = () => {
    return (
        <div className={style.socialNetworks}>
            <ul>
                {social.map((item, index) =>{
                    return(
                        <li key={index}>
                            <Link href="/">
                                <a>
                                    <Image src={item}/>
                                </a>
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default SocialSinglePost