export default function TourPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-10 flex-1">TourPage --- {params.id} ---</div>
  )
}
