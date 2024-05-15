export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-10 flex-1">
      ProfilePage --- {params.id} ---
    </div>
  )
}
