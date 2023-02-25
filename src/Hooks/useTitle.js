import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tourbox`;
    }, [title])
};

export default useTitle;