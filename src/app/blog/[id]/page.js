async function getPost(id) {
    const res = await fetch(`https://adsgenda.com/wp-json/wp/v2/posts/${id}?_embed`);
    return res.json();
  }
  
  export default async function SinglePost({ params }) {
    const post = await getPost(params.id);
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  
    return (
      <div>
        {/* ✅ ใช้ `style={{ backgroundImage: ... }}` เพื่อให้ใช้งานได้ */}
        <div
          className="relative h-[60vh] bg-cover bg-center bg-no-repeat after:absolute after:bg-black/70 after:top-0 after:bottom-0 after:left-0 after:right-0"
          style={{ backgroundImage: `url(${featuredImage})` }}
        />
  
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div className="blog-content mt-6 text-md leading-5" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>
    );
  }
  