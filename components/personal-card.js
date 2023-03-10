import Image from "next/image"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

const GithubIcon = <FontAwesomeIcon icon={faGithub} size="lg" />
const LinkedInIcon = <FontAwesomeIcon icon={faLinkedin} size="lg" />

const PersonalCard = () => {
    return (

        <div className="flex flex-col items-center">
            <Image
                priority
                src="/images/profile.jpg"
                height={150}
                width={150}
            />
            <h2 className="text-4xl font-bold tracking-tight">Carsten Böhm</h2>
            <p className="text-lg tracking-tight">
                Software & Data Engineer
            </p>

            <p className="mt-2 text-lg space-x-4">
                <a href="/blog" className="">{GithubIcon} GitHub</a>
                <a href="/blog" className="">{LinkedInIcon} LinkedIn</a>
            </p>
        </div>
    )
}

export default PersonalCard