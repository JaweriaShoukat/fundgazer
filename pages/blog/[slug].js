import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    return <>
        <section>
            <div className='container mx-auto pt-28 pb-10'>
                <p>Post: {slug}</p>
            </div>
        </section>
    </>
}

export default Post