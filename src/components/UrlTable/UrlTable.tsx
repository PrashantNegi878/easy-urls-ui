import { Link } from "react-router-dom";
import { UrlData } from "../../interface/urlData"
import { COPY_SVG, serverUrl } from "../../helpers/constants";

interface IUrlTableProps{
    data:UrlData[];
}

export default function UrlTable({data}:IUrlTableProps) {

    const copyToClipboard =async(url:string)=>{
        try {
            await navigator.clipboard.writeText(`${serverUrl}/${url}`)
            alert(`URL Copied : ${serverUrl}/${url}`)
        } catch (error) {
            console.log(error);
            
        }
    }

    const renderTableData = ()=>{
        return data.map((item:UrlData)=>
            <tr key={item._id} className="border-b text-white bg-gray-800 hover:bg-gray-500">
                <td className="px-6 py-3 break-words">
                    <Link to={item.redirectUrl} target="_blank" rel="noreferrer noopener">{item.redirectUrl}</Link>
                </td>
                <td className="px-6 py-3 break-words">
                    <Link to={`${serverUrl}/${item.shortId}`} target="_blank" rel="noreferrer noopener">{`${serverUrl}/${item.shortId}`}</Link>
                </td>
                <td className="px-6 py-3">{item.visitHistory.length}</td>
                <td className="px-6 py-3 hover:cursor-pointer" onClick={()=>copyToClipboard(item.shortId)}>{COPY_SVG}</td>
            </tr>
        );
    }

  return (
    <div className='container mx-auto pt-2 pb-10 px-2'>
        <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
            <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-md uppercase text-gray-100 bg-gray-700'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-4/12'>Full URL</th>
                        <th scope='col' className='px-6 py-3 w-4/12'>Short URL</th>
                        <th scope='col' className='px-2 py-3 lg:px-6'>Clicks</th>
                        <th scope='col' className='px-2 py-3 lg:px-6'>Copy</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    </div>
  )
}