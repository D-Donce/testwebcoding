import Link from "next/link";

export default function Menu () {
    return (    
        <nav>
            <Link href="/">
                <a>home</a>
            </Link>
            <div></div>
            <Link href="/faq">
                <a>faq</a>
            </Link> 
            <div></div>
            <Link href="/App">
                <a>test</a>
            </Link> 
        </nav>
        // <nav>
        //     <a href="/">home</a>
        //     <a href="/faq">faq</a>
        // </nav>
    )
}