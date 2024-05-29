import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My first Blog', body: 'Blog Blog Blog', author: 'Kelly', id:1},
        { title: 'Second Blog', body: 'Blog Blog Blog', author: 'Carlos', id:2},
        { title: 'Third Blog', body: 'Blog Blog Blog', author: 'Kelly', id:3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran')
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Carlos')} title="Carlitos Blogs!"/>
        </div>
     );
}
 
export default Home;