import  { useState,useEffect } from 'react';
import { client } from '../sanity/sanityClient';
import ProgressiveImage from './ProgressiveImage';
import { Link } from 'react-router-dom';

export default function Sidebar() {
 const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // GROQ query to fetch only the latest posts
    const query = `*[_type == "post"] | order(publishedAt desc)[0...4] {
        _id,
        title,
        slug,
        publishedAt,
      mainImage
    }`;

    client
      .fetch(query)
      .then((data) => {
        setLatestPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching latest posts from Sanity:', err);
        setLoading(false);
      });
  }, []);


  // Mock data for tags
  const tags = [
    'Photography', 'Tokyo', 'Travel', 'Design', 
    'Rainstorms', 'CSS Layouts', 'React', 'Inspiration'
  ];

  return (
    <aside className="blog-sidebar">
      
      {/* Widget 1: Latest Posts */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Latest Posts</h3>
        <div className="latest-posts-list widget-content">
          {latestPosts.map((post) => (
           
            <Link key={post.id} to={`/post/${post._id}`} className="post-item">
              {/* <img src={post.image} alt={post.title} className="post-thumbnail" /> */}
                <ProgressiveImage imageObject={post.mainImage} alt={post.title} classNames='post-thumbnail' size="100"  />
              <div className="post-info">
                <span className="post-date">{post.publishedAt || '10/14/2026'}</span>
                <h4 className="post-title">{post.title}</h4>
              </div>
             </Link>
          ))}
        </div>
      </div>

      {/* Widget 2: Tags / Categories */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Tags</h3>
        <div className="tags-cloud widget-content">
          {tags.map((tag, index) => (
            <a key={index} href={`#tag-${tag.toLowerCase()}`} className="tag-badge">
              #{tag}
            </a>
          ))}
        </div>
      </div>

     
    </aside>
  );
}