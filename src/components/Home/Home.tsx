import { useEffect, useState } from "react";
import FormContainer from "./FormContainer/FormContainer";
import axios from "axios";
import { serverUrl } from "../../helpers/constants";
import UrlTable from "./Table/UrlTable/UrlTable";
import { useQuery } from "@tanstack/react-query";
import TableSplash from "./Table/TableSplash/TableSplash";
import TableError from "./Table/TableError/TableError";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [reload, setReload] = useState<boolean>(false);
  const updateReloadState = () => setReload(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("eurl_token");
  

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/analytics`, config);
    console.log(response);
    return response.data;
    console.log(reload);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["tableData"],
    queryFn: fetchTableData,
  });

  useEffect(()=>{
    if (!token) navigate("/login");
  },[token,navigate]);

  return (
    <div>
      <FormContainer updateReloadState={updateReloadState} />
      {data && <UrlTable data={data} />}
      {isPending && <TableSplash />}
      {error && <TableError />}
    </div>
  );
}
