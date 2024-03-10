import { useState } from "react";
import FormContainer from "../FormContainer/FormContainer";
import axios from "axios";
import { serverUrl } from "../../helpers/constants";
import UrlTable from "../Table/UrlTable/UrlTable";
import { useQuery } from "@tanstack/react-query";
import TableSplash from "../Table/TableSplash/TableSplash";
import TableError from "../Table/TableError/TableError";

export default function Main() {

  const [reload,setReload] = useState<boolean>(false);
  const updateReloadState = ()=>setReload(true);

  const fetchTableData=async()=>{
    const response=await axios.get(`${serverUrl}/analytics`);
    console.log(response);
    return response.data;
  };

  const { isPending, error, data } = useQuery({queryKey:['tableData'],queryFn:fetchTableData});

  return (
    <div>
        <FormContainer updateReloadState={updateReloadState}/>
        {data && <UrlTable data={data}/>}
        {isPending && <TableSplash/>}
        {error && <TableError/>}
    </div>
  )
}