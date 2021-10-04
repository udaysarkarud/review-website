import { useEffect } from "react";
import { useState } from "react"

const OurCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data=> setCourses(data))
    },[])
    return [courses];
}
export default OurCourses;