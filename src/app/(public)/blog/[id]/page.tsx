export default function PostPage({ params }: { params: { id: string } }) {
  return <div className="container py-10">PostPage --- {params.id} ---</div>
}
