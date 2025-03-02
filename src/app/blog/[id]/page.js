// Remove class attributes from any tag in the HTML string.
function removeClassAttributes(html) {
  return html.replace(/\s*class\s*=\s*(".*?"|'.*?')/gi, '');
}

async function getPost(id) {
  const res = await fetch(`https://adsgenda.com/wp-json/wp/v2/posts/${id}?_embed`);
  return res.json();
}

export default async function SinglePost({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url;

  // Remove class attributes while keeping <p> and <h*> tags intact.
  const titleHtml = removeClassAttributes(post.title.rendered);
  const contentHtml = removeClassAttributes(post.content.rendered);

  return (
    <div>
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat after:absolute after:bg-black/70 after:top-0 after:bottom-0 after:left-0 after:right-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <div className="blog-content mt-6 text-md leading-5" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
