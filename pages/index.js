
import {useRouter} from "next/router";
import {ROUTES} from "../constants/routes";
import {useEffect} from "react";


export default function Index( ) {
  const {push} = useRouter();
  useEffect(()=>{
      push(ROUTES.blogHome);
  },[])

    return (
    <> </>
    )
}

