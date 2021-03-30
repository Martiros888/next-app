import Link from 'next/link'

const IndexPage = (props:any) => {
    console.log(props)
    return (
        <div>
            <Link href='/about'>hello</Link>
        </div>
    )
}

export default IndexPage


export const getStaticProps = async ():Promise<any> => {
    return {
        props:{
            message:'hello'
        }
    }
}