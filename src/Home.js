import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My first Blog', body: 'Blog Blog Blog', author: 'Kelly', id:1},
        { title: 'Second Blog', body: 'Blog Blog Blog', author: 'Carlos', id:2},
        { title: 'Third Blog', body: 'Blog Blog Blog', author: 'Kelly', id:3}
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs} title="Carloses Blogs!"/>
        </div>
     );
}
 
export default Home;