import {createUrl} from "../lib/getCategory";

export const ROUTES = {
    blogSingle : (slug)=>"/blog/"+slug ,
    blogHome:"/blog",
    singleCategory:(slug)=>"/blog/category/"+slug
 }