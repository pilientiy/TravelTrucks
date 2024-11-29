import css from './RatingStars.module.css';

interface ReviewsType {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface RatingStarsProps {
  reviewItem: ReviewsType;
}

const RatingStars: React.FC<RatingStarsProps> = ({ reviewItem }) => {
  const { reviewer_rating } = reviewItem;

  const FilledStar = '/ratingIcons/ratingIcons.svg#icon-Property-1Pressed';
  const EmptyStar = '/ratingIcons/ratingIcons.svg#icon-Property-1Default';

  const stars = Array.from({ length: 5 }, (_, index) => (
    <li key={index}>
      <svg width={16} height={16}>
        <use href={index < reviewer_rating ? FilledStar : EmptyStar}></use>
      </svg>
    </li>
  ));

  return (
    <>
      <ul className={css.starts}>{stars}</ul>
    </>
  );
};

export default RatingStars;
