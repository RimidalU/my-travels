export default function ProfilePage({ params }: { params: { id: string } }) {
  return <div className="container py-10">ProfilePage --- {params.id} ---</div>
}
