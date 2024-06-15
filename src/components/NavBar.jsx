import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram} from "react-icons/fa"
import IconLinks from "./IconLinks"

export default function NavBar() {
    return (
            <nav className=" mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <h1 className="font-bold text-3xl">RC DEV</h1>
                </div>

                <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                    <IconLinks/>
                </div>
                
            </nav>
        
    )
}