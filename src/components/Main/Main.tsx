import { useEffect, useState } from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/urlData";
import axios from "axios";
import { serverUrl } from "../../helpers/constants";
import UrlTable from "../UrlTable/UrlTable";

export default function Main() {

  const [data,setData] = useState<UrlData[]>([]);
  const [reload,setReload] = useState<boolean>(false);

  const updateReloadState = ()=>setReload(true);

  const fetchTableData=async()=>{
    const response=await axios.get(`${serverUrl}/analytics`);
    console.log(response);
    setData(response.data);
    setReload(false);
  };

  useEffect(()=>{
    fetchTableData();
  },[reload]);

  return (
    <div>
        <FormContainer updateReloadState={updateReloadState}/>
        <UrlTable data={data}/>
    </div>
  )
}