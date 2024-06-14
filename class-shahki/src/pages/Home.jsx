import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);


// Es5
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  console.log(data)


  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/about")
  //   }, 3000)
  // }, [])

  useEffect(() => {
    fetchData()
  },[])




  //Es6
  const fetchData = async () => {
    try {
      const res =  await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="flex flex-col items-center py-4 gap-4">
      <h1>home</h1>
      <div>
        {data.map((item, index) => (
          <Card  key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
