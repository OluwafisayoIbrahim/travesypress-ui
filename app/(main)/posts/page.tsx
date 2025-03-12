import BackButton from "@/components/BackButton";
import Pagination from "@/components/posts/Pagination";
import PostsTable from "@/components/posts/PostsTable";

const PostsPage = () => {
    return ( 
        <>
        <BackButton text="Go Back" link="/" />
        <PostsTable limit={0} title={""} />
        <Pagination />
        </>
     );
}
 
export default PostsPage;