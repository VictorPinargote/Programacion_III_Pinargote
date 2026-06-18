// src/components/RatingStars.tsx

interface RatingStarsProps {
  rating: number
  maxStars?: number
}

export default function RatingStars({ rating, maxStars = 5 }: RatingStarsProps) {
  return (
    <div style={{ display: 'flex', gap: 4, fontSize: 24 }}>
      {Array.from({ length: maxStars }, (_, i) => (
        <span key={i} style={{ color: i < rating ? '#f59e0b' : '#d1d5db' }}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}
