import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Moments Made`;
    }, [title])
};

export default useTitle;