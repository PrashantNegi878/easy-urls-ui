export const baseUrl = import.meta.env.SERVER_URL || "https://easy-urls-service.vercel.app";
export const serverUrl = import.meta.env.SERVER_URL || "https://easy-urls-service.vercel.app/url";
export const GITHUB_URL='https://github.com/PrashantNegi878'
export const GENERIC_FAILURE_MESSAGE="OOPS!! Something went wrong.";

export const copyToClipboard =async(url:string|undefined)=>{
  try {
      await navigator.clipboard.writeText(`${serverUrl}/${url}`)
      alert(`URL Copied : ${serverUrl}/${url}`)
  } catch (error) {
      console.log(error);
  }
}
