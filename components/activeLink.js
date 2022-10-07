import { useRouter } from "next/router";
import Link,   from "next/link";
import React, { Children } from "react";


export const ActiveLink = ({
                                                          children,
                                                          activeClassName,
                                                          ...props
                                                      }) => {
    const  {asPath} = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className;
    const active =    asPath === props.href ||
        asPath === props.as ||
        asPath.replace(/\//g, "") === props.href.replace(/\//g, "");
    const  newClass = childClassName +" " +( active?"active":"");
    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: newClass
            })}
        </Link>
    );
};
