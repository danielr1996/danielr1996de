import Link from "next/link";
import {useRouter} from "next/router";

export const LanguageSwitcher = () => {
    const {asPath} = useRouter()
    return <>
        <Link href={asPath} locale="en">πΊπΈ</Link>
        <Link href={asPath} locale="de">π©πͺ</Link>
    </>
}