export {}
// import { useRouter } from 'next/router'
// import {GetStaticPaths, GetStaticProps} from "next";
// import {getBranchByID} from "../../lib/gms";
//
// type BranchProps = {
//     preview?: boolean
// }
//
// const Branch = ({  }: BranchProps) => {
//     const router = useRouter()
//     const { id } = router.query
//     return (
//         <>
//             {id}
//         </>
//     )
// }
//
// export default Branch
//
//
// export const getStaticProps: GetStaticProps = async({
//     params,
//     preview,
//     previewData
// }) => {
//
//     // const content = await markdownToHtml(post.content || '')
//     const branch = getBranchByID(params.id, preview, previewData)
//     return {
//         props: {
//             branch: {
//                 ...branch,
//                 content
//             }
//             // post: {
//             //     ...post,
//             //     content,
//             // },
//         },
//     }
// }
//
// export const getStaticPaths: GetStaticPaths = async () => {
//     // const posts = getAllPosts(['slug'])
//
//     return {
//         // paths: posts.map(({ slug }) => {
//         //     return {
//         //         params: {
//         //             slug,
//         //         },
//         //     }
//         // }),
//         fallback: false,
//     }
// }