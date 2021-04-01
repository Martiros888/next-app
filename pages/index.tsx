import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { Redux } from '../typescript/types';

const IndexPage = (props:any) => {
    const dispatch = useDispatch();
    const data = useSelector((state:Redux) => state.Reducer1.load);
    const change = () => {
        dispatch({type:'LOAD',payload:false})
        console.log(data)
    }
    return (
        <div>
            <button onClick={change}>click</button>
            <Link href='/tokens'>hello</Link>
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