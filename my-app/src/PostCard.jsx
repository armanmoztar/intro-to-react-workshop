function PostCard({ title, content }) {

    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      
    );
  }
  
  export default PostCard;
  