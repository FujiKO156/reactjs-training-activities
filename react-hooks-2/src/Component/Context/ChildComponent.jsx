import { context } from "./context"
import { useContext } from "react";

const ChildComponent = () => {
    const {username,theme} = useContext(context);
    return(
        <div>
            Child Component
            <li>User Name: {username}</li>
            <li>Theme: {theme}</li>
        </div>
    )
}
export default ChildComponent